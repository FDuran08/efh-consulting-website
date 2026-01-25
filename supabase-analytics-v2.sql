-- Analytics V2: Bounce Rate, Funnels, Click Heatmaps
-- Run this in your Supabase SQL Editor

-- Add session_id to page_views if it doesn't exist
ALTER TABLE page_views ADD COLUMN IF NOT EXISTS session_id TEXT;
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views(session_id);

-- Add session_id to analytics_events if it doesn't exist
ALTER TABLE analytics_events ADD COLUMN IF NOT EXISTS session_id TEXT;
CREATE INDEX IF NOT EXISTS idx_analytics_events_session_id ON analytics_events(session_id);

-- Sessions Table (for bounce rate tracking)
CREATE TABLE IF NOT EXISTS sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  visitor_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  site_id TEXT NOT NULL DEFAULT 'efh-website',

  duration_seconds INTEGER DEFAULT 0,
  pages_viewed INTEGER DEFAULT 1,
  max_scroll_depth INTEGER DEFAULT 0,
  is_bounce BOOLEAN DEFAULT true,
  exit_page TEXT
);

CREATE INDEX IF NOT EXISTS idx_sessions_site_id ON sessions(site_id);
CREATE INDEX IF NOT EXISTS idx_sessions_created_at ON sessions(created_at);
CREATE INDEX IF NOT EXISTS idx_sessions_session_id ON sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_sessions_is_bounce ON sessions(is_bounce);

-- Funnel Events Table (for conversion funnels)
CREATE TABLE IF NOT EXISTS funnel_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  visitor_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  site_id TEXT NOT NULL DEFAULT 'efh-website',

  funnel_name TEXT NOT NULL,
  step_number INTEGER NOT NULL,
  step_name TEXT NOT NULL,
  page_path TEXT,
  conversion_type TEXT,
  conversion_value DECIMAL(10,2)
);

CREATE INDEX IF NOT EXISTS idx_funnel_events_site_id ON funnel_events(site_id);
CREATE INDEX IF NOT EXISTS idx_funnel_events_created_at ON funnel_events(created_at);
CREATE INDEX IF NOT EXISTS idx_funnel_events_funnel_name ON funnel_events(funnel_name);
CREATE INDEX IF NOT EXISTS idx_funnel_events_step_number ON funnel_events(step_number);
CREATE INDEX IF NOT EXISTS idx_funnel_events_session_id ON funnel_events(session_id);

-- Click Events Table (for heatmaps)
CREATE TABLE IF NOT EXISTS click_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  visitor_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  site_id TEXT NOT NULL DEFAULT 'efh-website',

  page_path TEXT NOT NULL,
  x_percent INTEGER,
  y_percent INTEGER,
  x_pixel INTEGER,
  y_pixel INTEGER,
  element_tag TEXT,
  element_id TEXT,
  element_class TEXT,
  element_text TEXT,
  viewport_width INTEGER,
  viewport_height INTEGER
);

CREATE INDEX IF NOT EXISTS idx_click_events_site_id ON click_events(site_id);
CREATE INDEX IF NOT EXISTS idx_click_events_created_at ON click_events(created_at);
CREATE INDEX IF NOT EXISTS idx_click_events_page_path ON click_events(page_path);
CREATE INDEX IF NOT EXISTS idx_click_events_session_id ON click_events(session_id);

-- Enable RLS on new tables
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE funnel_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE click_events ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon (client-side tracking)
CREATE POLICY "Allow anonymous inserts on sessions" ON sessions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on funnel_events" ON funnel_events
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on click_events" ON click_events
  FOR INSERT TO anon WITH CHECK (true);

-- Allow reads for authenticated users (CRM dashboard)
CREATE POLICY "Allow authenticated reads on sessions" ON sessions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated reads on funnel_events" ON funnel_events
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated reads on click_events" ON click_events
  FOR SELECT TO authenticated USING (true);

-- Service role full access
CREATE POLICY "Allow service role on sessions" ON sessions
  FOR ALL TO service_role USING (true);

CREATE POLICY "Allow service role on funnel_events" ON funnel_events
  FOR ALL TO service_role USING (true);

CREATE POLICY "Allow service role on click_events" ON click_events
  FOR ALL TO service_role USING (true);
