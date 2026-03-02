// Configuración de Conexión a RutaBinaria
const _supabaseUrl = 'https://ayfocockwdqkumohqegu.supabase.co'; 
const _supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5Zm9jb2Nrd2Rxa3Vtb2hxZWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0MDI5NjgsImV4cCI6MjA4Nzk3ODk2OH0.V1aINJ4xtsCE8-3e44DEeGel4823D0edKMvpK_PY9qs'; 

// Usamos window.db para que sea accesible en todos los archivos sin conflictos
window.db = supabase.createClient(_supabaseUrl, _supabaseKey);