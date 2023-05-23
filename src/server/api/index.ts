import { Router } from 'express'
import { HealthController } from '../controllers/health'
import { LeagueController } from '../controllers/leagues'
import { MatchController } from '../controllers/matches'

const router = Router()

router.get('/leagues', LeagueController.getAll)
router.get('/leagues/:leagueId/matches', MatchController.getByLeague)

router.get('/health', HealthController.get)

export default router
