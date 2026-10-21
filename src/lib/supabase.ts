import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "Supabase ortam değişkenleri eksik. .env.local dosyasını kontrol edin.",
  );
}

const supabaseProjectUrl = new URL(supabaseUrl).origin;

export const supabase = createClient(
  supabaseProjectUrl,
  supabasePublishableKey,
);
