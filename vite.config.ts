/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: 'test/setup.ts',
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      reportsDirectory: './test/unit/coverage',
      reporter: ['text', 'json', 'html'],
    },
  },
})
