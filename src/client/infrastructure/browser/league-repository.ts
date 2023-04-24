import { League, LeagueRepository, Match } from '../../../core'

export class LocalLeagueRepository implements LeagueRepository {
  private storage: Storage

  constructor() {
    this.storage = window.localStorage
  }

  async getAll(): Promise<League[]> {
    throw new Error('Method not implemented')
  }

  getMatches(league: string): Promise<Match[]> {
    throw new Error('Method not implemented')
  }
}
