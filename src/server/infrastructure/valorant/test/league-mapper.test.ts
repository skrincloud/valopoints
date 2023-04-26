import { expect, it } from 'vitest'

import { toLeague } from '../league-mapper'

const data: Record<string, any> = {
  id: '109974795266458277',
  slug: 'vct_americas',
  name: 'VCT Americas',
  image: 'http://static.lolesports.com/leagues/mock.png',
}

it('should map valorant league to League', function () {
  const league = toLeague(data)
  expect(league.id).toBe(data.id)
  expect(league.name).toBe(data.name)
  expect(league.slug).toBe(data.slug)
  expect(league.image).toBe(data.image)
})
