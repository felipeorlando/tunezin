import { useContext } from 'react'
import Loader from 'react-loader-spinner'
import HomeContext from '../../../context'
import theme from '../../theme'
import { StyledContainer, StyledError } from './styles'
import Item from './Item'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const List = () => {
  const { context } = useContext(HomeContext)

  const { data, error, loading } = context

  const isLoadingOrHasError = loading || !!error

  return (
    <>
      <StyledContainer data-testid='list' isLoading={isLoadingOrHasError}>
        {loading && (
          <div data-testid='loader'>
            <Loader
              type='ThreeDots'
              color={theme.silver}
              height={40}
              width={40}
            />
          </div>
        )}
        {error && (
          <StyledError data-testid='errorMsg'>
            Something went wrong
          </StyledError>
        )}
        {!loading && !error && data.map(({ artworkUrl100, artistName, name, id }) => (
          <Item key={id} image={artworkUrl100} title={name} subtitle={artistName} />
        ))}
      </StyledContainer>
    </>
  )
}

export default List
