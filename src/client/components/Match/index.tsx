import classNames from 'classnames'

import './Match.css'

interface Props {
  onClick?: () => void

  names: {
    home: string
    away: string
  }
  images: {
    home: string
    away: string
  }
  score: {
    home: number
    away: number
  }
  slug: {
    home: string
    away: string
  }
  action?: {
    text: string
    onClick: () => void
  }
}

function Match(props: Props) {
  const { names, images, score, slug, action, onClick } = props
  const className = classNames('MatchCard', {
    'MatchCard--clickable': !!onClick,
  })

  const homeName = names?.home || ''
  const awayName = names?.away || ''
  const homeImage = images?.home || ''
  const awayImage = images?.away || ''
  const homeScore = score?.home || 0
  const awayScore = score?.away || 0
  const homeSlug = slug?.home || ''
  const awaySlug = slug?.away || ''

  return (
    <div className={className} onClick={onClick}>
      <div className="MatchCard__team">
        <div className="MatchCard__team_snippet">
          <div>
            <span className="MatchCard__team_name">{homeName}</span>
            <span className="MatchCard__team_slug">[ {homeSlug} ]</span>
          </div>
          <button className="MatchCard__action">Apostar</button>
        </div>
        <img className="MatchCard__image" src={homeImage} alt={homeName} />
      </div>
      <div className="MatchCard__score">
        <span className="MarchCard__score_label">Final</span>
        <span className="MarchCard__score_text">
          {homeScore > awayScore ? (
            <span className="MatchCard__score_max">{homeScore}</span>
          ) : (
            <span>{homeScore}</span>
          )}
          :
          {awayScore > homeScore ? (
            <span className="MatchCard__score_max">{awayScore}</span>
          ) : (
            <span>{awayScore}</span>
          )}
        </span>
      </div>
      <div className="MatchCard__team">
        <div className="MatchCard__team_snippet">
          <div>
            <span className="MatchCard__team_slug">[ {awaySlug} ]</span>
            <span className="MatchCard__team_name">{awayName}</span>
          </div>
          <button className="MatchCard__action">Apostar</button>
        </div>
        <img className="MatchCard__image" src={awayImage} alt={awayName} />
      </div>
    </div>
  )
}

export default Match
