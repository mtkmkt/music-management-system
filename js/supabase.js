import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://mgegkbxspcynxeggjrlh.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nZWdrYnhzcGN5bnhlZ2dqcmxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDQwNjEsImV4cCI6MjA5MDEyMDA2MX0.WISm3ALQRmXt9bGfr7Mv_vIps1UmIjijAtya_ScRH_Y'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)