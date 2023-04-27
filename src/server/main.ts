import express from 'express'
import server from 'vite-express'
import api from './api'
import { parse } from './shared/environment'

function bootstrap() {
  const {
    server: { port },
  } = parse()

  const app = express()
  app.use('/api', api)

  server.listen(app, port)
}

bootstrap()
