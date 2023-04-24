import { Match, MatchState } from '../../../core'
import Card from '../ui/Card'

interface Props {
  matches: Match[]
}

const states: Record<MatchState, string> = {
  [MatchState.InProgress]: 'En progreso',
  [MatchState.Completed]: 'Completado',
  [MatchState.Unstarted]: 'No iniciado',
}

function Matches({ matches }: Props) {
  return (
    <ul className="Leagues">
      {matches.map(function (match) {
        const { id, state, teams } = match
        const { home, away } = teams
        const title = `${home.name} vs ${away.name}`

        return (
          <li key={id}>
            <Card
              title={title}
              subtitle={states[state]}
              image={teams.away.image}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Matches
