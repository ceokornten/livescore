const axios = require('axios')

class Livescore {
  constructor({ key, secret }) {
    if (!key || !secret) {
      throw new Error('Api key and secret are required attributes')
    }

    // Note: Ideally the baseUrl attribute would be set in the create method,
    // but because the url ends in .json axios has issues joining the relative path
    // to the baseUrl
    this.baseUrl = 'http://livescore-api.com/api-client'
    this.api = axios.create({ params: { secret, key } })
  }

  verify() {
    return this.api.get(`${this.baseUrl}/users/pair.json`)
  }

  scores(params = {}) {
    return this.api.get(`${this.baseUrl}/scores/live.json`, { params })
  }

  countries(params = {}) {
    return this.api.get(`${this.baseUrl}/countries/list.json`, { params })
  }

  leagues(params = {}) {
    return this.api.get(`${this.baseUrl}/leagues/list.json?`, { params })
  }

  leaguesFixtures(params = {}) {
    return this.api.get(`${this.baseUrl}/fixtures/leagues.json`, { params })
  }

  fixtures(params = {}) {
    return this.api.get(`${this.baseUrl}/fixtures/matches.json`, { params })
  }
}

module.exports = Livescore
