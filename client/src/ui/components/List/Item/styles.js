import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'

export const StyledImage = styled(LazyLoadImage)`
  width: 100%;
`

export const StyledSubtitle = styled.span`
  color: ${({ theme }) => theme.dark};
  display: block;
  font-size: 1rem;
  margin-top: 10px;
`

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.dark};
  font-size: 1.2rem;
  margin-top: 5px;
`

export const StyledWrapper = styled.div``
