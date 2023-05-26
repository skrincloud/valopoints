import { GetAllLeagues, GetMatchesFromLeague, LeagueRepository } from '../core'
import { ApiLeagueRepository } from './infrastructure/api/league-repository'
import { StorageRepository } from './infrastructure/browser/storage-repository'
import { LocalRepository } from './infrastructure/common/local-repository'
import { MockLeagueRepository } from './infrastructure/mocks/mock-league-repository'
import { LeagueService } from './services/league-service'

interface Container {
  getAllLeagues: GetAllLeagues
  leagueService: LeagueService
  getMatchesFromLeague: GetMatchesFromLeague
}

function getContainer(): Container {
  const leagueRepository: LeagueRepository = new ApiLeagueRepository()
  const localRepository: LocalRepository = new StorageRepository()

  return {
    getAllLeagues: new GetAllLeagues(leagueRepository),
    leagueService: new LeagueService(localRepository),
    getMatchesFromLeague: new GetMatchesFromLeague(leagueRepository),
  }
}

function getTestContainer(): Partial<Container> {
  return {
    getAllLeagues: new GetAllLeagues(new MockLeagueRepository()),
  }
}

export function forge(): Container {
  if (import.meta.env.NODE_ENV === 'test') {
    return { ...getContainer(), ...getTestContainer() }
  }
  return getContainer()
}
