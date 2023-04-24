import { League } from '../../../core'

export function toLeague(body: Record<string, any>): League {
  return new League({
    id: body.id,
    name: body.name,
    slug: body.slug,
    image: body.image,
  })
}

export function toLeagues(body: Record<string, any>[]): League[] {
  return body.map(toLeague)
}
