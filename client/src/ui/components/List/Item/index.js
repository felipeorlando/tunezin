import PropTypes from 'prop-types'
import { StyledImage, StyledTitle, StyledSubtitle, StyledWrapper } from './styles'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Item = ({ image, title, subtitle }) => (
  <StyledWrapper>
    <StyledImage src={image} effect='blur' data-testid='image' />
    <StyledSubtitle>{subtitle}</StyledSubtitle>
    <StyledTitle>{title}</StyledTitle>
  </StyledWrapper>
)

Item.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default Item
