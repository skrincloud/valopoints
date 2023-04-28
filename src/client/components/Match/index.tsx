export interface MatchProps {
  onClick?: () => void

  names: {
    home: string,
    away: string,
  }
  images: {
    home: string,
    away: string
  },
  score: {
    home: number,
    away: number
  },
  slug: {
    home: string,
    away: string
  }
  action?: {
    text: string
    onClick: () => void
  }
}