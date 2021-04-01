import React from 'react'
import renderer from 'react-test-renderer'

import Container from '..'

describe('Container', () => {
  it('renders correctly', () => {
    const component = <Container>Test</Container>
    const tree = renderer.create(component).toJSON()

    expect(tree).toMatchSnapshot()
  })

  describe('when receives compact prop', () => {
    it('renders correctly with different style', () => {
      const component = <Container compactu>Test</Container>
      const tree = renderer.create(component).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
