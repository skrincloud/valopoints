import classNames from 'classnames'
import { CardProps } from '.'

import './CompactCard.css'

function CompactCard(props: CardProps) {
  const { image, title, subtitle, action, onClick } = props
  const className = classNames('CompactCard', {
    'CompactCard--clickable': !!onClick,
  })

  return (
    <div className={className} onClick={onClick}>
      <img className="CompactCard__image" src={image} alt={title} />
      <div className="CompactCard__content">
        <span className="CompactCard__title">{title}</span>
        <span className="CompactCard__subtitle">{subtitle}</span>
      </div>
      {action && action.text && (
        <button
          className="CompactCard__action text-gradient"
          onClick={action.onClick}
          type="button"
        >
          {action.text}
        </button>
      )}
    </div>
  )
}

export default CompactCard
