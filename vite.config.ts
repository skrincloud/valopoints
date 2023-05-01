/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    APP_STAGE: JSON.stringify(JSON.stringify(process.env.VITE_STAGE)),
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
