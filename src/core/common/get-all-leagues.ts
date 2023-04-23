import { LeagueRepository } from '../league/league-repository'

export class GetAllLeagues {
  constructor(private readonly repository: LeagueRepository) {}

  execute() {
    return this.repository.getAll()
  }
}
