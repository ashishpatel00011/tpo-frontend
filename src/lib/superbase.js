import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qunyzicrelrjsqpvgfkt.supabase.co";
const supabaseAnonKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1bnl6aWNyZWxyanNxcHZnZmt0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzYwNzc1OSwiZXhwIjoyMDQzMTgzNzU5fQ.ozXGEEUzpKRiK9N-Q6rnvWhPIA-9qUJAm1HwmzBnL24";

console.log(supabaseUrl);
console.log(supabaseAnonKey);
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase environment variables are missing!");
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
