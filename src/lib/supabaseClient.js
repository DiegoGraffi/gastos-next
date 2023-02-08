import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://aidzxhyjgpiculztziqf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZHp4aHlqZ3BpY3VsenR6aXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU4OTUwODUsImV4cCI6MTk5MTQ3MTA4NX0.dfaMoSMrOu1Ll6cJ6BtMsbCzF8nW5s1u6utn9kf_nb8"
);
