import { Match, MatchState } from '../../../core'

function generateMatch(home: string, away: string): Match {
  const id = Math.round(Math.random() * 100).toString()

  return {
    id: `mock_test_match_${id}`,
    state: MatchState.InProgress,
    teams: {
      home: {
        id: home,
        image: `https://picsum.photos/200/300?id=${home}`,
        name: home,
        score: 0,
        slug: 'T1',
      },
      away: {
        id: away,
        image: `https://picsum.photos/200/300?id=${away}`,
        name: away,
        score: 1,
        slug: 'T2',
      },
    },
  }
}

export const matches: Match[] = [
  generateMatch('DRX', 'T1'),
  generateMatch('G2', 'LOUD'),
  generateMatch('NRG', 'KRU'),
]
