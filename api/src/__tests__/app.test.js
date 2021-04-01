const request = require('supertest')
const fetch = require('node-fetch')
const app = require('../app')

jest.mock('node-fetch')

describe('GET /api/:category', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('when everything goes fine', () => {
    beforeEach(() => {
      fetch.mockResolvedValue({
        status: 200,
        json: () => ({ feed: { results: ['foo', 'bar'] } })
      })
    })

    it('fetchs properly', (done) => {
      request(app)
        .get('/api/top-songs')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((_err, res) => {
          expect(fetch).toHaveBeenCalledWith('https://rss.itunes.apple.com/api/v1/us/itunes-music/top-songs/all/100/non-explicit.json')
          expect(res.body.data).toEqual(['foo', 'bar'])
          done()
        })
    })
  })

  describe('when there is an error on the external api', () => {
    beforeEach(() => {
      fetch.mockImplementation({
        status: 500,
        json: () => ({})
      })
    })

    it('returns the error on body', (done) => {
      request(app)
        .get('/api/top-songs')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)
        .end((_err, res) => {
          expect(res.body.error).not.toBeUndefined()
          done()
        })
    })
  })

  describe('when is passed an unknown category', () => {
    beforeEach(() => {
      fetch.mockResolvedValue({
        status: 200,
        json: () => ({ feed: { foo: 'bar' } })
      })
    })

    it('returns the error on body', (done) => {
      request(app)
        .get('/api/top-movies')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)
        .end((_err, res) => {
          expect(res.body.error).toEqual('Specified category does not exist')
          done()
        })
    })
  })
})
