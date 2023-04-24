import { GetAllLeagues, LeagueRepository } from '../core'
import { ApiLeagueRepository } from './infrastructure/api/league-repository'
import { StorageRepository } from './infrastructure/browser/storage-repository'
import { LocalRepository } from './infrastructure/common/local-repository'
import { LeagueService } from './services/league-service'

export interface Dependencies {
  getAllLeagues: GetAllLeagues
  leagueService: LeagueService
}

export function forge(): Dependencies {
  const leagueRepository: LeagueRepository = new ApiLeagueRepository()
  const localRepository: LocalRepository = new StorageRepository()

  return {
    getAllLeagues: new GetAllLeagues(leagueRepository),
    leagueService: new LeagueService(localRepository),
  }
}
