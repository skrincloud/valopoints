import { League } from '../../../core'

export interface LocalRepository {
  getSelectedLeague(): League | null
  saveSelectedLeague(league: League): void
  clearSelectedLeague(): void
}
