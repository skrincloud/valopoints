import { MatchId } from '../match'

export type LeagueId = string

export interface LeagueParams {
  id: LeagueId
  name: string
  slug: string
  image: string
}

export class League {
  readonly id: LeagueId
  readonly name: string
  readonly slug: string
  readonly image: string

  public matches?: MatchId[]

  constructor(params: LeagueParams) {
    this.id = params.id
    this.name = params.name
    this.slug = params.slug
    this.image = params.image
  }
}
