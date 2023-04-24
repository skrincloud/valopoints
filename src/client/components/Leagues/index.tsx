import { League } from '../../../core'
import Card from '../ui/Card'

import './Leagues.css'

interface Props {
  leagues: League[]
  onLeagueClick: (league: League) => void
}

function Leagues({ leagues, onLeagueClick }: Props) {
  return (
    <ul className="Leagues">
      {leagues.map(function (league) {
        const { id, name, image, slug } = league
        return (
          <li key={id}>
            <Card
              title={name}
              subtitle={slug}
              image={image}
              onClick={() => onLeagueClick(league)}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Leagues
