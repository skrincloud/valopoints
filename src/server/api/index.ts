import { Router } from 'express'
import { LeagueController } from '../controllers/leagues'
import { HealthController } from '../controllers/health'

const router = Router()

router.get('/leagues', LeagueController.getAll)

router.get('/health', HealthController.get)

export default router
