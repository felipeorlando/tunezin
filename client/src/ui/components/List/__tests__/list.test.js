import { render, screen } from '@testing-library/react'
import List from '..'
import HomeContext, { initialContext } from '../../../../context'

const renderListWithContext = (contextValue) => {
  const context = {
    context: contextValue,
    setContext: () => undefined
  }

  return render(
    <HomeContext.Provider value={context}>
      <List />
    </HomeContext.Provider>
  )
}

describe('List', () => {
  describe('when is loading', () => {
    it('render loader', () => {
      renderListWithContext({
        ...initialContext,
        loading: true
      })

      const loader = screen.getByTestId('loader')

      expect(loader).toBeInTheDocument()
    })
  })

  describe('when has data', () => {
    it('render list with items', () => {
      renderListWithContext({
        ...initialContext,
        loading: false,
        data: [
          {
            artistName: 'Bruno Mars, Anderson .Paak & Silk Sonic',
            id: '1556097162',
            name: 'Leave The Door Open',
            artistUrl: 'https://music.apple.com/WebObjects/MZStore.woa/wa/viewCollaboration?cc=us&ids=278873078-855484536-1556097160&app=itunes',
            artworkUrl100: 'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/36/8b/5c/368b5c12-725e-e85d-36be-5287461cc0a2/075679788337.jpg/200x200bb.png'
          },
          {
            artistName: 'Masked Wolf',
            id: '1547525311',
            name: 'Astronaut In The Ocean',
            artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/78/3a/b6/783ab65c-7210-6cbe-9316-22564b8177ad/075679793102.jpg/200x200bb.png'
          }
        ]
      })

      const list = screen.getByTestId('list')

      expect(list.children.length).toEqual(2)
    })
  })

  describe('when has error', () => {
    it('render list error message', () => {
      renderListWithContext({
        ...initialContext,
        loading: false,
        error: true
      })

      const errorMsg = screen.getByTestId('errorMsg')

      expect(errorMsg).toBeInTheDocument()
    })
  })
})
