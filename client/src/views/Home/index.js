import { useEffect, useState } from 'react'
import HomeContext, { initialContext } from '../../context'
import Filters from '../../ui/components/Filters'
import List from '../../ui/components/List'
import Navbar from '../../ui/components/Navbar'
import { searchFetcher } from '../../fetchers'

const Home = () => {
  const [context, setContext] = useState(initialContext)

  useEffect(() => {
    setContext({
      ...initialContext,
      ...context,
      loading: true
    })

    searchFetcher(context.selectedCategory)
      .then((response) => {
        setContext({
          ...context,
          loading: false,
          data: response.data
        })
      })
      .catch(() => {
        setContext({
          ...context,
          loading: false,
          error: 'Something went wrong'
        })
      })
  }, [context.selectedCategory])

  return (
    <HomeContext.Provider value={{ context, setContext }}>
      <Navbar />
      <Filters />
      <List />
    </HomeContext.Provider>
  )
}

export default Home
