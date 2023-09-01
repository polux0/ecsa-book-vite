import { createClient } from '@supabase/supabase-js';
function initiateSupabase(){

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL; // e.g. https://xyzcompany.supabase.co
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

return createClient(SUPABASE_URL, SUPABASE_API_KEY);

}
export {initiateSupabase}