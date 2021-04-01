import styled from 'styled-components'

export const StyledSelect = styled.select`
  padding: 20px 30px;
  width: 100%;
  border-radius: 5px;
  border: 5px solid ${({ theme }) => theme.dark}
`

export const StyledTitle = styled.h2`
 font-size: 2.2rem;
 font-weight: bold;
 margin-top: 60px;
`

export const StyledWrapper = styled.section`
  padding: 90px 0 30px;
`
