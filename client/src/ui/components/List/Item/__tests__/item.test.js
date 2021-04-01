import { render, screen } from '@testing-library/react'
import Item from '..'

describe('Item', () => {
  it('render item properly', () => {
    const props = {
      title: 'Lorem ipsum',
      image: 'http://placekitten.com/g/200/200',
      subtitle: 'Dolor sit amet'
    }

    render(<Item {...props} />)

    const title = screen.getByText(props.title)
    const subtitle = screen.getByText(props.subtitle)
    const image = screen.getByTestId('image')

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(image).toBeVisible()
    expect(image.src).toEqual(props.image)
  })
})
