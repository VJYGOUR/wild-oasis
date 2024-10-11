import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yftuoezhlykofolnymrn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmdHVvZXpobHlrb2ZvbG55bXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNTUwODksImV4cCI6MjA0MzkzMTA4OX0.h8ZSh69vsN7vmqdTS4uyvl7feNV8qI-NgGi2DQRl7AY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
