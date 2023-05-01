import express from 'express'
import server from 'vite-express'
import api from './api'
import { parse } from './shared/environment'

function bootstrap() {
  const {
    server: { port },
  } = parse()

  console.log('main.ts', process.env)

  const app = express()
  app.use('/api', api)

  server.listen(app, port)
}

bootstrap()
