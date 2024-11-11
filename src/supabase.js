import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://czbpydztcmvpylzsavny.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6YnB5ZHp0Y212cHlsenNhdm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNDQ3MDAsImV4cCI6MjA0NDYyMDcwMH0.5lFxUXMOLYqmW14pdxGw74lvyDJWrI2JseuU5mWyrcc";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Sign up function
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}
// Login function
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}
// Logout function
export async function logout() {
  const { error } = await supabase.auth.signOut();
  return { error };
}
