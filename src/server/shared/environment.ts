import dotenv from 'dotenv'

const nodeEnvironments = ['development', 'test', 'production'] as const
const serverEnvironments = ['local', 'sandbox', 'qa', 'production'] as const

type NodeEnvironment = (typeof nodeEnvironments)[number]
type StageEnvironment = (typeof serverEnvironments)[number]

interface Environment {
  server: {
    port: number
  }
  database: {
    host?: string
    port?: number
    name?: string
    user?: string
    password?: string
  }
  content: {
    url?: string
  }
  environment: {
    node: NodeEnvironment
    stage: StageEnvironment
  }
}

export function parse(): Environment {
  dotenv.config()

  return {
    server: {
      port: Number(process.env.PORT) || 3000,
    },
    database: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    content: {
      url: process.env.CONTENT_URL,
    },
    environment: {
      node: filter<NodeEnvironment>(
        process.env.NODE_ENV,
        nodeEnvironments,
        'development',
      ),
      stage: filter<StageEnvironment>(
        process.env.VITE_STAGE,
        serverEnvironments,
        'local',
      ),
    },
  }
}

function filter<T>(
  value: string | undefined,
  options: readonly string[],
  defaultValue: T,
): T {
  if (value && options.includes(value)) {
    return value as T
  }
  return defaultValue
}
