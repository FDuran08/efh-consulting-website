import { supabase } from './supabase';

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
    const deviceInfo = getDeviceInfo();

    await supabase.from('page_views').insert({
      visitor_id: visitorId,
      page_path: pathname,
      page_url: window.location.href,
      referrer: document.referrer || null,
      ...deviceInfo,
      site_id: 'efh-website', // Identifier for this site (useful when tracking multiple sites)
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
}

// Track custom events (button clicks, form submissions, etc.)
export async function trackEvent(eventName: string, eventData?: Record<string, unknown>) {
  try {
    const visitorId = getVisitorId();

    await supabase.from('analytics_events').insert({
      visitor_id: visitorId,
      event_name: eventName,
      event_data: eventData || {},
      page_path: window.location.pathname,
      site_id: 'efh-website',
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
}
