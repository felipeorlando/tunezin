import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Navbar from '..'

describe('Navbar', () => {
  it('renders correctly', () => {
    const component = <Navbar />
    const tree = renderer.create(component).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with logo', () => {
    render(<Navbar />)
    const logoElement = screen.getByText(/tunezin/i)
    expect(logoElement).toBeInTheDocument()
  })
})
