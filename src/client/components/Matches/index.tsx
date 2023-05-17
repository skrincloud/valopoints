import { Match } from '../../../core'
import MatchComponent from '../Match'

import './Matches.css'

interface Props {
  matches: Match[]
}

function Matches({ matches }: Props) {
  return (
    <ul className="Leagues">
      {matches.map(function (match) {
        const { id, teams } = match
        const { home, away } = teams
        const names = { home: home.name, away: away.name }
        const images = { home: home.image, away: away.image }
        const score = { home: home.score, away: away.score }
        const slug = { home: home.slug, away: away.slug }

        return (
          <li className="League" key={id}>
            <MatchComponent
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
