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
}

export function parse(): Environment {
  dotenv.config()

  return {
    server: {
      port: parseInt(process.env.PORT as string) || 3000,
    },
    database: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT as string),
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
  }
}
