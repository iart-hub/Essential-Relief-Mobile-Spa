import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Essential-Relief-Mobile-Spa/",
  build: {
    outDir: 'docs'  // ← ADICIONE ISSO!
  }
})
