import { League } from '../../../core'
import { toLeague } from '../api/league-mapper'

const keys = {
  leagues: 'leagues',
}

export class StorageRepository {
  private storage: Storage

  constructor() {
    this.storage = window.localStorage
  }

  getSelectedLeague(): League {
    const item = this.storage.getItem(keys.leagues) || '{}'
    return toLeague(JSON.parse(item))
  }

  saveSelectedLeague(league: League): void {
    this.storage.setItem(keys.leagues, JSON.stringify(league))
  }

  clearSelectedLeague(): void {
    this.storage.removeItem(keys.leagues)
  }
}
