import { useContext } from 'react'
import HomeContext from '../../../context'
import { categories } from '../../../data'
import Container from '../Container'
import { StyledSelect, StyledTitle, StyledWrapper } from './styles'

const Filters = (props) => {
  const { context, setContext } = useContext(HomeContext)

  const selectChangeHandler = (event) => {
    setContext({
      ...context,
      selectedCategory: event.target.value
    })
  }

  return (
    <StyledWrapper>
      <Container compact>
        <StyledSelect
          {...props}
          data-testid='select'
          value={context.selectedCategory}
          onChange={selectChangeHandler}
        >
          {Object.keys(categories).map((key) => (
            <option key={key} value={key}>{categories[key]}</option>
          ))}
        </StyledSelect>

        <StyledTitle data-testid='title'>
          {categories[context.selectedCategory]}:
        </StyledTitle>
      </Container>
    </StyledWrapper>
  )
}

export default Filters
