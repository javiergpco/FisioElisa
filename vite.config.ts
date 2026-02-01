import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: './', // CRÍTICO: Asegura rutas relativas para Vercel
    plugins: [react()],
    define: {
      // Evita crash si la variable no existe en el navegador
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  };
});