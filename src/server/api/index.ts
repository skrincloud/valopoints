import { Router } from 'express'
import MySQLDatabase from '../vendors/mysql'
import { LeagueController } from '../controllers/leagues'

const router = Router()

router.get('/leagues', LeagueController.getAll)

router.get('/health', async function (request, response) {
  try {
    const database = new MySQLDatabase()
    await database.ping()
    response.json({
      services: {
        database: 'OK',
      },
    })
  } catch (error) {
    response.status(500)
    response.json({
      services: {
        database: 'There is a problem in the app',
      },
    })
  }
})

export default router
