import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://clulijrddwhmsysscmyo.supabase.co' 

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdWxpanJkZHdobXN5c3NjbXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxODc2ODcsImV4cCI6MjA2NDc2MzY4N30.G4nkA8OKGA_KktCYT67JSLpbUFnxn8V3f0E8M4EuRfE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
