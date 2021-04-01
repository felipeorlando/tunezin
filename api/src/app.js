const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const fetch = require('node-fetch')

const app = express()

app.use(morgan('tiny'))
app.use(cors())

const categories = ['hot-tracks', 'new-music', 'recent-releases', 'top-albums', 'top-songs']

app.get('/api/:category', async (req, res) => {
  try {
    const reqCategory = req.params.category

    if (!categories.includes(reqCategory)) {
      throw new Error('Specified category does not exist')
    }

    const response = await fetch(
      `https://rss.itunes.apple.com/api/v1/us/itunes-music/${reqCategory}/all/100/non-explicit.json`
    )

    const plainData = await response.json()

    return res.status(200).send({ data: plainData.feed.results })
  } catch (e) {
    return res.status(500).send({ error: e.message })
  }
})

module.exports = app
