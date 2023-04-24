import { League } from '../../../core'

import './Leagues.css'

interface Props {
  leagues: League[]
}

function Leagues({ leagues }: Props) {
  return (
    <>
      <ul className="Leagues">
        {leagues.map(function ({ id, name, image, slug }) {
          return (
            <li key={id} className="League">
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
