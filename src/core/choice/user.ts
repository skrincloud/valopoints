export interface UserParams {
  id: string
  name: string
  email: string
  provider: string
}

export class User {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly provider: string

  constructor(params: UserParams) {
    this.id = params.id
    this.name = params.name
    this.email = params.email
    this.provider = params.provider
  }
}
