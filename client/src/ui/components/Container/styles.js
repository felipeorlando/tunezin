import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { measures, rules } from '../../breakpoints'

export const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;

  @media ${rules.md} {
    max-width: ${measures.md}px;
  }

  @media ${rules.lg} {
    max-width: ${measures.lg}px;
  }

  ${({ compact }) => compact && css`
    @media ${rules.md} {
      width: ${measures.md}px;
    }
  `}
`

StyledContainer.propTypes = {
  compact: PropTypes.bool
}

StyledContainer.defaultProps = {
  compact: false
}
