import { ThemeProvider } from 'styled-components'
import Home from './views/Home'
import GlobalStyle from './ui/globalStyle'
import theme from './ui/theme'

const App = () => (
  <>
    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </>
)

export default App
