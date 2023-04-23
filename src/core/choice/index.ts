import { MatchId } from '../match'
import { TeamId } from '../match/team'
import { User } from './user'

export interface ChoiceParams {
  user: User
  match: MatchId
  election: TeamId
}

export class Choice {
  readonly user: User
  readonly match: MatchId

  public election: TeamId

  constructor(params: ChoiceParams) {
    this.user = params.user
    this.match = params.match
    this.election = params.election
  }

  choose(choice: TeamId) {
    this.election = choice
  }
}
