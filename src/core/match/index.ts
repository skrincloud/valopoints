import { Team } from './team'

export type MatchId = string

enum MatchState {
  InProgress,
  Completed,
  Unstarted,
}

export enum Outcome {
  Win,
  Lose,
  Draw,
}

export interface ScoreParams {
  team: Team
  score: number
  outcome?: Outcome
}

class TeamWithScore extends Team {
  readonly score: number
  readonly outcome?: Outcome

  constructor(params: ScoreParams) {
    super(params.team)
    this.score = params.score
    this.outcome = params.outcome
  }
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
