import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // <-- Ini plugin Tailwind v4

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // <-- Kita daftarkan di sini supaya aktif
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})