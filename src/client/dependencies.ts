import { GetAllLeagues, LeagueRepository } from '../core'
import { ApiLeagueRepository } from './infrastructure/api/league-repository'

export interface Dependencies {
  getAllLeagues: GetAllLeagues
}

export function forge(): Dependencies {
  const leagueRepository: LeagueRepository = new ApiLeagueRepository()

  return {
    getAllLeagues: new GetAllLeagues(leagueRepository),
  }
}
