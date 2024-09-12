import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vdaofdmrfynnqpqmrnku.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkYW9mZG1yZnlubnFwcW1ybmt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3MDI5MjcsImV4cCI6MjAzOTI3ODkyN30.d_DbdCczuiTMMMgrK4kGUttC1myyLzMZt51p5I8T6nU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
