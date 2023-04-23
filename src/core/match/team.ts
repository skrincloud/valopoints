export type TeamId = string

export interface TeamParams {
  id: TeamId
  name: string
  image: string
  slug: string
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
