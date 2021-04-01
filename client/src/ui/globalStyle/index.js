import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: Arial, sans-serif;
  }

  h1, h2, h3 {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
