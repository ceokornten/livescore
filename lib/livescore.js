const axios = require('axios')


class Livescore {
  constructor({ key, secret }) {
    if (!key || !secret) {
      throw new Error('Api key and secret are required attributes')
    }

    this.api = axios.create({
      baseUrl: 'http://livescore-api.com/api-client/',
      params: { secret, key }
    })
  }

  verify() {
    return this.api.get('/users/pair.json')
  }

  scores(params) {
    params || (params = {})

    return this.api.get('/scores/live.json', { params })
  }

  countries(params) {
    params || (params = {})

    return this.api.get('/countries/list.json', { params })
  }

  leagues(params) {
    params || (params = {})

    return this.api.get('/leagues/list.json?', { params })
  }

  leaguesFixtures(params) {
    params || (params = {})

    return this.api.get('/fixtures/leagues.json', { params })
  }

  fixtures(params) {
    params || (params = {})

    return this.api.get('/fixtures/matches.json', { params })
  }
}

module.exports = Livescore
