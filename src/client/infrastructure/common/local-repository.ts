import { League } from '../../../core'

export interface LocalRepository {
  getSelectedLeague(): League
  saveSelectedLeague(league: League): void
  clearSelectedLeague(): void
}
