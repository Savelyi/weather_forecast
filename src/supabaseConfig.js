import { createClient } from '@supabase/supabase-js';
import { apiKeys } from './constants/apiKeys';
import { apiUrls } from './constants/apiUrls';

export const supabase = createClient(apiUrls.supabaseUrl, apiKeys.supabase_key);
