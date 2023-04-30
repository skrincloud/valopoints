import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import Card, { CardProps } from '../index'

describe('<Card />', function () {
  const props: CardProps = {
    title: 'Card',
  }

  beforeEach(function () {
    render(<Card {...props} />)
  })

  it('should render the component', function () {
    const element = screen.getByText(props.title)
    expect(element.textContent).toBeTruthy()
  })
})
