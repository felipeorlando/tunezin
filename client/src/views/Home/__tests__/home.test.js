import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Home from '..'
import { categories } from '../../../data'

jest.spyOn(window, 'fetch')

const fakeResponse = [
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

describe('Home', () => {
  beforeEach(() => {
    fetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ data: fakeResponse })
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('on filters section', () => {
    describe('when changes filter', () => {
      it('changes title properly', async () => {
        render(<Home />)

        await waitFor(() => screen.getByTestId('list'))

        const categoryKey = 'top-songs'

        fireEvent.change(screen.getByTestId('select'), {
          target: { value: categoryKey }
        })

        await waitFor(() => screen.getByTestId('list'))

        expect(
          screen.getByText(`${categories[categoryKey]}:`)
        ).toBeInTheDocument()
      })
    })
  })
})
