import axios from 'axios'
import { League, LeagueRepository, Match } from '../../../core'
import { toLeagues } from './league-mapper'
import { toMatches } from './match-mapper'

export class ApiLeagueRepository implements LeagueRepository {
  async getAll(): Promise<League[]> {
    const response = await axios.get('/api/leagues')
    const leagues = response.data && response.data.data
    return toLeagues(leagues)
  }

  async getMatches(leagueId: string): Promise<Match[]> {
    const response = await axios.get(`/api/leagues/${leagueId}/matches`)
    const matches = response.data && response.data.data
    return toMatches(matches)
  }
}
