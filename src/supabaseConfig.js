import { createClient } from '@supabase/supabase-js';
import { supabaseUrl, supabaseKey } from './constants/supabase';

export const supabase = createClient(supabaseUrl, supabaseKey);
