import { Router } from 'express'
import MySQLDatabase from '../vendors/mysql'

const router = Router()

router.get('/', async function (request, response) {
  response.json({
    message: 'Welcome to the API!',
  })
})

router.get('/health', async function (request, response) {
  try {
    const database = new MySQLDatabase()
    await database.ping()
    response.json({
      message: 'Everything good!',
    })
  } catch (error) {
    response.status(500)
    response.json({
      message: 'There is a problem in the app',
    })
  }
})

export default router
