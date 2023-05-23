import { GetAllLeagues, GetMatchesFromLeague, LeagueRepository } from '../core'
import { ValorantLeagueRepository } from './infrastructure/valorant/league-repository'
import { parse } from './shared/environment'

interface Container {
  getAllLeagues: GetAllLeagues
  getMatchesFromLeague: GetMatchesFromLeague
}

function getContainer(): Container {
  const leagueRepository: LeagueRepository = new ValorantLeagueRepository()
  return {
    getAllLeagues: new GetAllLeagues(leagueRepository),
    getMatchesFromLeague: new GetMatchesFromLeague(leagueRepository),
  }
}

function getTestContainer(): Partial<Container> {
  return {}
}

export function forge(): Container {
  if (parse().environment.node === 'test') {
    return { ...getContainer(), ...getTestContainer() }
  }
  return getContainer()
}
