import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: { proxy: { '/api': 'http://localhost:4000' }, allowedHosts: ['localhost', '127.0.0.1', 'stubbly-radiative-christinia.ngrok-free.dev'], }
});
