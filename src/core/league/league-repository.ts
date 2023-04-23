import { League, LeagueId } from '.'
import { Match } from '../match'

export interface LeagueRepository {
  getAll(): Promise<League[]>
  getMatches(league: LeagueId): Promise<Match[]>
}
