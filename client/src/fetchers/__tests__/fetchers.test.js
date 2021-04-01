import { searchFetcher } from '..'

jest.spyOn(window, 'fetch')

describe('fetchers', () => {
  const fetchReturnValue = { data: { foo: 'bar' } }

  beforeEach(() => {
    fetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => fetchReturnValue
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('.searchFetcher', () => {
    it('call fetch properly', () => {
      searchFetcher('top-songs')

      expect(fetch).toHaveBeenCalledWith(
        'http://localhost:3001/api/top-songs',
        expect.objectContaining({ method: 'GET' })
      )
    })

    it('returns data properly', async () => {
      const result = await searchFetcher('top-songs')

      expect(result).toEqual(fetchReturnValue)
    })
  })
})
