import { createContext } from 'react'

export const initialContext = {
  selectedCategory: 'hot-tracks',
  loading: false,
  error: undefined,
  data: []
}

const HomeContext = createContext({
  context: initialContext,
  setContext: () => undefined
})

export default HomeContext
