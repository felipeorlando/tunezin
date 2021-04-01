import styled, { css } from 'styled-components'
import Container from '../Container'
import { rules } from '../../breakpoints'

export const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 15px;

  @media ${rules.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  ${({ isLoading }) => isLoading && css`
    display: flex;
    justify-content: center;
  `}
`

export const StyledError = styled.span`
  background-color: ${({ theme }) => theme.blood};
  border-radius: 5px;
  color: ${({ theme }) => theme.white};
  display: block;
  margin: 0 auto;
  max-width: 400px;
  padding: 30px;
  text-align: center;
  width: 100%;
`
