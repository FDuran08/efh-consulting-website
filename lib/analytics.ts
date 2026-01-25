import { supabase } from './supabase';

// Session management
let sessionId: string | null = null;
let sessionStartTime: number | null = null;
let hasEngaged = false;
let maxScrollDepth = 0;

// Generate or retrieve visitor ID
function getVisitorId(): string {
  if (typeof window === 'undefined') return '';

  let visitorId = localStorage.getItem('efh_visitor_id');
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem('efh_visitor_id', visitorId);
  }
  return visitorId;
}

// Generate or retrieve session ID (expires after 30 min inactivity)
function getSessionId(): string {
  if (typeof window === 'undefined') return '';

  const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  const now = Date.now();

  const storedSession = sessionStorage.getItem('efh_session');
  if (storedSession) {
    const { id, lastActivity } = JSON.parse(storedSession);
    if (now - lastActivity < SESSION_TIMEOUT) {
      sessionId = id;
      sessionStorage.setItem('efh_session', JSON.stringify({ id, lastActivity: now }));
      return id;
    }
  }

  // New session
  sessionId = crypto.randomUUID();
  sessionStartTime = now;
  hasEngaged = false;
  maxScrollDepth = 0;
  sessionStorage.setItem('efh_session', JSON.stringify({ id: sessionId, lastActivity: now }));
  return sessionId;
}

// Get device info
function getDeviceInfo() {
  if (typeof window === 'undefined') return {};

  const ua = navigator.userAgent;

  return {
    browser: getBrowser(ua),
    os: getOS(ua),
    device_type: getDeviceType(),
    screen_width: window.screen.width,
    screen_height: window.screen.height,
    language: navigator.language,
  };
}

function getBrowser(ua: string): string {
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Edge')) return 'Edge';
  if (ua.includes('Opera')) return 'Opera';
  return 'Unknown';
}

function getOS(ua: string): string {
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac')) return 'macOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  return 'Unknown';
}

function getDeviceType(): string {
  if (typeof window === 'undefined') return 'Unknown';
  const width = window.innerWidth;
  if (width < 768) return 'Mobile';
  if (width < 1024) return 'Tablet';
  return 'Desktop';
}

// Track page view
export async function trackPageView(pathname: string) {
  try {
    const visitorId = getVisitorId();
    const currentSessionId = getSessionId();
    const deviceInfo = getDeviceInfo();

    await supabase.from('page_views').insert({
      visitor_id: visitorId,
      session_id: currentSessionId,
      page_path: pathname,
      page_url: window.location.href,
      referrer: document.referrer || null,
      ...deviceInfo,
      site_id: 'efh-website',
    });

    // Track funnel step if this is a funnel page
    trackFunnelStep(pathname);
  } catch (error) {
    console.error('Analytics error:', error);
  }
}

// Track custom events (button clicks, form submissions, etc.)
export async function trackEvent(eventName: string, eventData?: Record<string, unknown>) {
  try {
    const visitorId = getVisitorId();
    const currentSessionId = getSessionId();

    // Mark as engaged
    hasEngaged = true;

    await supabase.from('analytics_events').insert({
      visitor_id: visitorId,
      session_id: currentSessionId,
      event_name: eventName,
      event_data: eventData || {},
      page_path: window.location.pathname,
      site_id: 'efh-website',
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
}

// ============================================
// BOUNCE RATE TRACKING
// ============================================

// Mark user as engaged (called on meaningful interactions)
export function markEngaged() {
  hasEngaged = true;
}

// Track scroll depth
export function trackScroll() {
  if (typeof window === 'undefined') return;

  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const depth = scrollHeight > 0 ? Math.round((scrolled / scrollHeight) * 100) : 0;

  if (depth > maxScrollDepth) {
    maxScrollDepth = depth;
    // Scrolling past 25% counts as engagement
    if (depth >= 25) {
      hasEngaged = true;
    }
  }
}

// Track session end (called on page unload)
export async function trackSessionEnd() {
  if (typeof window === 'undefined') return;

  const visitorId = getVisitorId();
  const currentSessionId = sessionId || getSessionId();
  const timeOnPage = sessionStartTime ? Math.round((Date.now() - sessionStartTime) / 1000) : 0;

  // Time on page > 10 seconds counts as engagement
  if (timeOnPage > 10) {
    hasEngaged = true;
  }

  try {
    await supabase.from('sessions').insert({
      visitor_id: visitorId,
      session_id: currentSessionId,
      duration_seconds: timeOnPage,
      pages_viewed: 1, // Will be updated by aggregation
      max_scroll_depth: maxScrollDepth,
      is_bounce: !hasEngaged,
      exit_page: window.location.pathname,
      site_id: 'efh-website',
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
}

// ============================================
// CONVERSION FUNNEL TRACKING
// ============================================

// Define your funnel steps
const FUNNEL_STEPS: Record<string, { step: number; name: string }> = {
  '/': { step: 1, name: 'Homepage' },
  '/services': { step: 2, name: 'Services' },
  '/pricing': { step: 3, name: 'Pricing' },
  '/contact': { step: 4, name: 'Contact Page' },
};

// Track funnel progression
async function trackFunnelStep(pathname: string) {
  const funnelStep = FUNNEL_STEPS[pathname];
  if (!funnelStep) return;

  try {
    const visitorId = getVisitorId();
    const currentSessionId = getSessionId();

    await supabase.from('funnel_events').insert({
      visitor_id: visitorId,
      session_id: currentSessionId,
      funnel_name: 'main_conversion',
      step_number: funnelStep.step,
      step_name: funnelStep.name,
      page_path: pathname,
      site_id: 'efh-website',
    });
  } catch (error) {
    console.error('Funnel tracking error:', error);
  }
}

// Track conversion (form submission, etc.)
export async function trackConversion(conversionType: string, value?: number) {
  try {
    const visitorId = getVisitorId();
    const currentSessionId = getSessionId();

    // Track as final funnel step
    await supabase.from('funnel_events').insert({
      visitor_id: visitorId,
      session_id: currentSessionId,
      funnel_name: 'main_conversion',
      step_number: 5,
      step_name: 'Conversion',
      page_path: window.location.pathname,
      conversion_type: conversionType,
      conversion_value: value,
      site_id: 'efh-website',
    });

    // Also track as event
    await trackEvent('conversion', { type: conversionType, value });
  } catch (error) {
    console.error('Conversion tracking error:', error);
  }
}

// ============================================
// CLICK TRACKING (for heatmaps)
// ============================================

export async function trackClick(event: MouseEvent) {
  try {
    const visitorId = getVisitorId();
    const target = event.target as HTMLElement;

    // Get element identifier
    const elementId = target.id || '';
    const elementClass = target.className || '';
    const elementTag = target.tagName.toLowerCase();
    const elementText = target.textContent?.slice(0, 50) || '';

    // Get click position (percentage of viewport)
    const xPercent = Math.round((event.clientX / window.innerWidth) * 100);
    const yPercent = Math.round((event.clientY / window.innerHeight) * 100);

    // Mark as engaged
    hasEngaged = true;

    await supabase.from('click_events').insert({
      visitor_id: visitorId,
      session_id: getSessionId(),
      page_path: window.location.pathname,
      x_percent: xPercent,
      y_percent: yPercent,
      x_pixel: event.clientX,
      y_pixel: event.clientY,
      element_tag: elementTag,
      element_id: elementId,
      element_class: typeof elementClass === 'string' ? elementClass : '',
      element_text: elementText,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      site_id: 'efh-website',
    });
  } catch (error) {
    console.error('Click tracking error:', error);
  }
}
