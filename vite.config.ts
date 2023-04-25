/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'c8',
      reportsDirectory: './test/unit/coverage',
      reporter: ['text', 'json', 'html'],
    },
  },
})
