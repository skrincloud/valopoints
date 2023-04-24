import { GetAllLeagues, LeagueRepository } from '../core'
import { ValorantLeagueRepository } from './infrastructure/valorant/league-repository'

export interface Container {
  getAllLeagues: GetAllLeagues
}

export function forge(): Container {
  const leagueRepository: LeagueRepository = new ValorantLeagueRepository()

  return {
    getAllLeagues: new GetAllLeagues(leagueRepository),
  }
}
