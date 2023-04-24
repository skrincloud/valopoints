import { League } from '../../../core'

import './Leagues.css'

interface Props {
  leagues: League[]
  onLeagueClick: (league: League) => void
}

function Leagues({ leagues, onLeagueClick }: Props) {
  return (
    <>
      <ul className="Leagues">
        {leagues.map(function (league) {
          const { id, name, image, slug } = league

          return (
            <li
              key={id}
              className="League"
              onClick={() => onLeagueClick(league)}
            >
              <img className="League__image" src={image} alt={name} />
              <div className="League__content">
                <span className="League__title">{name}</span>
                <span className="League__subtitle">{slug}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Leagues
