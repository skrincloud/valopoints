import { Match, MatchState, Team, TeamWithScore } from '../../../core'

function toMatchState(state: string): MatchState {
  switch (state) {
    case 'in_progress':
      return MatchState.InProgress
    case 'completed':
      return MatchState.Completed
    case 'unstarted':
      return MatchState.Unstarted
  }

  return MatchState.Unstarted
}

function toTeam(body: Record<string, any> = {}): Team {
  return new Team({
    id: body.code,
    name: body.name,
    slug: body.code,
    image: body.image,
  })
}

export function toMatch(body: Record<string, any> = {}): Match {
  return new Match({
    id: body.match.id,
    teams: {
      home: new TeamWithScore({
        team: toTeam(body.match.teams[0]),
        score: 0,
      }),
      away: new TeamWithScore({
        team: toTeam(body.match.teams[1]),
        score: 0,
      }),
    },
    state: toMatchState(body.state),
  })
}

export function toMatches(body: Record<string, any>[]): Match[] {
  return body.map(toMatch)
}
