import { render, screen } from '@testing-library/react'
import Filter from '..'
import { initialContext } from '../../../../context'
import { categories } from '../../../../data'

describe('Filter', () => {
  it('render filter properly', () => {
    render(<Filter />)

    const selectElement = screen.getByTestId('select')

    expect(selectElement).toBeVisible()
    expect(selectElement.value).toEqual(initialContext.selectedCategory)
  })

  it('render title properly', () => {
    render(<Filter />)

    const titleElement = screen.getByText(
      categories[initialContext.selectedCategory] + ':'
    )

    expect(titleElement).toBeVisible()
  })
})
