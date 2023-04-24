import { League, LeagueId, LeagueRepository, Match } from '../../../core'
import { toLeagues } from './league-mapper'
import { toMatches } from './match-mapper'
import { Valorant } from '../../vendors/valorant'

export class ValorantLeagueRepository implements LeagueRepository {
  private readonly api: Valorant

  constructor() {
    this.api = new Valorant()
  }

  async getAll(): Promise<League[]> {
    const leagues = await this.api.getAllLeagues()
    return toLeagues(leagues)
  }

  async getMatches(league: LeagueId): Promise<Match[]> {
    const matches = await this.api.getMatches(league)
    return toMatches(matches)
  }
}
