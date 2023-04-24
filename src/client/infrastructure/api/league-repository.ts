import axios from 'axios'
import { League, LeagueRepository, Match } from '../../../core'
import { toLeagues } from './league-mapper'

export class ApiLeagueRepository implements LeagueRepository {
  async getAll(): Promise<League[]> {
    const response = await axios.get('/api/leagues')
    const leagues = response.data && response.data.data
    return toLeagues(leagues)
  }

  getMatches(league: string): Promise<Match[]> {
    throw new Error('Method not implemented')
  }
}
