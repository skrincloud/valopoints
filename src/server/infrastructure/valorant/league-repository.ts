import { League, LeagueId, LeagueRepository, Match } from '../../../core'
import { toLeagues } from './league-mapper'
import { toMatches } from './match-mapper'
import { Valorant } from '../../vendors/valorant'
import { Content } from '../../vendors/content'

const defautLeagues = [
  '109974795266458277',
  '106109559530232966',
  '109974804058058602',
]

export class ValorantLeagueRepository implements LeagueRepository {
  private readonly api: Valorant
  private readonly content: Content

  constructor() {
    this.api = new Valorant()
    this.content = new Content()
  }

  async getAll(): Promise<League[]> {
    const leagues = await this.api.getAllLeagues()
    const allowedLeagueIds = await this.getAllowedLeagues()
    return toLeagues(leagues).filter(function (league) {
      return allowedLeagueIds.includes(league.id)
    })
  }

  async getMatches(league: LeagueId): Promise<Match[]> {
    const matches = await this.api.getMatches(league)
    return toMatches(matches)
  }

  async getAllowedLeagues() {
    const leagueIds = await this.content.getLeagueIds()
    return leagueIds.length > 0 ? leagueIds : defautLeagues
  }
}
