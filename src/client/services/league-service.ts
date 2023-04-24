import { League } from '../../core'
import { LocalRepository } from '../infrastructure/common/local-repository'

export class LeagueService {
  constructor(private repository: LocalRepository) {}

  getSelectedLeague(): League | null {
    return this.repository.getSelectedLeague()
  }

  saveSelectedLeague(league: League): void {
    this.repository.saveSelectedLeague(league)
  }
}
