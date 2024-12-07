import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import less from 'vite-plugin-less'

export default defineConfig({
  plugins: [react(), less()],
})
