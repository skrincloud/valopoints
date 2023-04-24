import { Team, TeamWithScore } from './team'

export type MatchId = string

export enum MatchState {
  InProgress,
  Completed,
  Unstarted,
}

interface MatchParams {
  id: MatchId
  teams: {
    home: TeamWithScore
    away: TeamWithScore
  }
  winner?: Team
  state: MatchState
}

export class Match {
  readonly id: MatchId
  readonly teams: {
    home: TeamWithScore
    away: TeamWithScore
  }
  readonly winner?: Team
  readonly state: MatchState

  constructor(params: MatchParams) {
    this.id = params.id
    this.teams = params.teams
    this.winner = params.winner
    this.state = params.state
  }
}
