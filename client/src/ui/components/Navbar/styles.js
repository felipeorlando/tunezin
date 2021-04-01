import styled from 'styled-components'
import Container from '../Container'

export const StyledContainer = styled(Container)`
  justify-content: center;
  display: flex;
`

export const StyledLogo = styled.h1`
  color: ${({ theme }) => theme.dark};
  font-size: 1rem;
`

export const StyledWrapper = styled.nav`
  padding: 15px 0;
`
