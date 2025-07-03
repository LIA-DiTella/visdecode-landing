import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/visdecode-landing/',
  plugins: [
    tailwindcss(),
  ],
})