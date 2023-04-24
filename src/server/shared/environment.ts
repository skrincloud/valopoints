import dotenv from 'dotenv'

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
    }
  }
}
