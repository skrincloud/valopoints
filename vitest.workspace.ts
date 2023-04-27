import { VitestEnvironment } from 'vitest'
import { UserProjectConfigExport, defineWorkspace } from 'vitest/config'

interface FolderOptions {
  name: 'core' | 'server' | 'client'
  environment?: VitestEnvironment
}

function defineFolder(options: FolderOptions): UserProjectConfigExport & {
  extends: string
} {
  return {
    extends: './vite.config.ts',
    test: {
      name: options.name,
      include: [`src/${options.name}/**/*.test.{ts,tsx}`],
      environment: options.environment,
    },
  }
}

export default defineWorkspace([
  defineFolder({ name: 'core' }),
  defineFolder({ name: 'server' }),
  defineFolder({ name: 'client', environment: 'jsdom' }),
])
