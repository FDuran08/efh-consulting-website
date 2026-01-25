-- Analytics Tables for EFH Consulting
-- Run this in your Supabase SQL Editor

-- Page Views Table
CREATE TABLE IF NOT EXISTS page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Visitor identification
  visitor_id TEXT NOT NULL,
  site_id TEXT NOT NULL DEFAULT 'efh-website',

  -- Page info
  page_path TEXT NOT NULL,
  page_url TEXT,
  referrer TEXT,

  -- Device info
  browser TEXT,
  os TEXT,
  device_type TEXT,
  screen_width INTEGER,
  screen_height INTEGER,
  language TEXT
);

-- Analytics Events Table (for tracking clicks, form submissions, etc.)
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Visitor identification
  visitor_id TEXT NOT NULL,
  site_id TEXT NOT NULL DEFAULT 'efh-website',

  -- Event info
  event_name TEXT NOT NULL,
  event_data JSONB DEFAULT '{}',
  page_path TEXT
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_page_views_site_id ON page_views(site_id);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_visitor_id ON page_views(visitor_id);
CREATE INDEX IF NOT EXISTS idx_page_views_page_path ON page_views(page_path);

CREATE INDEX IF NOT EXISTS idx_analytics_events_site_id ON analytics_events(site_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event_name ON analytics_events(event_name);

-- Enable Row Level Security (RLS)
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (anon key) - needed for client-side tracking
CREATE POLICY "Allow anonymous inserts on page_views" ON page_views
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on analytics_events" ON analytics_events
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow reads only for authenticated users (your CRM dashboard)
CREATE POLICY "Allow authenticated reads on page_views" ON page_views
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated reads on analytics_events" ON analytics_events
  FOR SELECT TO authenticated
  USING (true);

-- Optional: Also allow service_role to read (for server-side CRM access)
CREATE POLICY "Allow service role full access on page_views" ON page_views
  FOR ALL TO service_role
  USING (true);

CREATE POLICY "Allow service role full access on analytics_events" ON analytics_events
  FOR ALL TO service_role
  USING (true);
