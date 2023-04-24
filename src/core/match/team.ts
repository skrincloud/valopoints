export type TeamId = string

export interface TeamParams {
  id: TeamId
  name: string
  image: string
  slug: string
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

export class Team {
  readonly id: TeamId
  readonly name: string
  readonly image: string
  readonly slug: string

  constructor(params: TeamParams) {
    this.id = params.id
    this.name = params.name
    this.image = params.image
    this.slug = params.slug
  }
}

export class TeamWithScore extends Team {
  readonly score: number
  readonly outcome?: Outcome

  constructor(params: ScoreParams) {
    super(params.team)
    this.score = params.score
    this.outcome = params.outcome
  }
}
