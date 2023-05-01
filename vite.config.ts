/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

console.log('vite.config.ts', process.env.STAGE_ENV)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    APP_STAGE: JSON.stringify(process.env.STAGE_ENV || 'local'),
  },
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
