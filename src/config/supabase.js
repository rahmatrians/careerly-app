import { createClient } from '@supabase/supabase-js';

const supabase_url = 'https://nigkotxzlgcwqsetuctn.supabase.co';
const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pZ2tvdHh6bGdjd3FzZXR1Y3RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1NTA1MTksImV4cCI6MTk2NjEyNjUxOX0.EDVmMTZjehjU0U2hPvskKIGOr0zbk4d7dcpc-WwiBkg';
const supabase = createClient(supabase_url, supabase_key);

export default supabase;