import { LeagueId } from '../league'
import { LeagueRepository } from '../league/league-repository'

export class GetMatchesFromLeague {
  constructor(private readonly repository: LeagueRepository) {}

  execute(leagueId: LeagueId) {
    return this.repository.getMatches(leagueId)
  }
}
