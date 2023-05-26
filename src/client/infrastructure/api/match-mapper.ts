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
    id: body.id,
    name: body.name,
    slug: body.slug,
    image: body.image,
  })
}

export function toMatch(body: Record<string, any> = {}): Match {
  return new Match({
    id: body.id,
    teams: {
      home: new TeamWithScore({
        team: toTeam(body.teams.home),
        score: body.teams.home.score,
      }),
      away: new TeamWithScore({
        team: toTeam(body.teams.away),
        score: body.teams.away.score,
      }),
    },
    state: toMatchState(body.state),
  })
}

export function toMatches(body: Record<string, any>[]): Match[] {
  return body.map(toMatch)
}
