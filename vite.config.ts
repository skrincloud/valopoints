/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: 'test/setup.ts',
    reporters: 'verbose',
    coverage: {
      provider: 'c8',
      extension: ['.ts', '.tsx'],
      reportsDirectory: './test/unit/coverage',
      reporter: ['html-spa', 'text-summary'],
    },
  },
})
