import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: './vite.config.ts',
    test: {
      name: 'client',
      include: ['src/client/**/*.test.{ts,tsx}'],
      environment: 'jsdom',
    },
  },
  {
    extends: './vite.config.ts',
    test: {
      name: 'server',
      include: ['src/{core,server}/**/*.test.ts'],
      environment: 'node',
    },
  },
])
