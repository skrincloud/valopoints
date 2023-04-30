import { League, LeagueRepository, Match } from '../../../core'

export class MockLeagueRepository implements LeagueRepository {
  async getAll(): Promise<League[]> {
    return [
      {
        id: '109974795266458277',
        slug: 'vct_americas',
        name: 'VCT Americas',
        image: 'http://static.lolesports.com/leagues/vct_americas.png',
      },
      {
        id: '106132846649518478',
        slug: 'challengers_latam',
        name: 'Challengers LATAM',
        image: 'http://static.lolesports.com/leagues/challengers_latam.png',
      },
    ]
  }

  getMatches(league: string): Promise<Match[]> {
    throw new Error('Method not implemented')
  }
}
