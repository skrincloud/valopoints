import CompactCard from './CompactCard'

export enum CardType {
  Classic,
  Compact,
  Wide,
}

export interface CardProps {
  type?: CardType
  onClick?: () => void

  title: string
  subtitle?: string
  image?: string
  body?: string
  action?: {
    text: string
    onClick: () => void
  }
}

function Card(props: CardProps) {
  const { type = CardType.Compact } = props

  switch (type) {
    case CardType.Wide:
    case CardType.Classic:
    case CardType.Compact:
      return <CompactCard {...props} />
    default:
      return <CompactCard {...props} />
  }
}

export default Card
