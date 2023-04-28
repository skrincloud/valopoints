import { Match, MatchState } from '../../../core'
import CardMatch from '../Match/Match'

import './index.css'

interface Props {
  matches: Match[]
}

function Matches({ matches }: Props) {
  return (
    <ul className="Leagues">
      {matches.map(function (match) {
        const { id, state, teams } = match
        const { home, away } = teams
        const names = { home: home.name, away: away.name }
        const images = { home: home.image, away: away.image }
        const score = { home: home.score, away: away.score }
        const slug = { home: home.slug, away: away.slug }

        return (
          <li key={id}>
            <CardMatch
              names={names}
              images={images}
              score={score}
              slug={slug}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Matches
