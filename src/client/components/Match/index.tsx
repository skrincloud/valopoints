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
  const { names, images, score, slug, onClick } = props
  const className = classNames('Match', {
    'Match--clickable': !!onClick,
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
      <div className="Match__team">
        <div className="Match__team_snippet">
          <div>
            <span className="Match__team_name">{homeName}</span>
            <span className="Match__team_slug">[ {homeSlug} ]</span>
          </div>
          <button className="Match__action">Apostar</button>
        </div>
        <img className="Match__image" src={homeImage} alt={homeName} />
      </div>
      <div className="Match__score">
        <span className="Match__score_label">Final</span>
        <span className="Match__score_text">
          <span className={homeScore > awayScore ? 'Match__score_max' : ''}>
            {homeScore}
          </span>
          <span className={homeScore < awayScore ? 'Match__score_max' : ''}>
            {awayScore}
          </span>
        </span>
      </div>
      <div className="Match__team">
        <div className="Match__team_snippet">
          <div>
            <span className="Match__team_slug">[ {awaySlug} ]</span>
            <span className="Match__team_name">{awayName}</span>
          </div>
          <button className="Match__action">Apostar</button>
        </div>
        <img className="Match__image" src={awayImage} alt={awayName} />
      </div>
    </div>
  )
}

export default Match
