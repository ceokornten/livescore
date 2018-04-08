/* global jest describe it expect */

const Livescore = require('../lib/livescore')

describe('Livescore', () => {
  it('throws an error if key or secret is not defined on class instantiation', () => {
    const insteateClass = ({ key, secret }) => {
      const livescore = new Livescore({ key, secret })
    }

    expect(() => insteateClass({ key: 'foo' })).toThrowError(
      /Api key and secret are required attributes/,
    )
    expect(() => insteateClass({ secret: 'foo' })).toThrowError(
      /Api key and secret are required attributes/,
    )
  })

  it('it has a verify, scores, countries, leagues, leaguesFixtures and fixtures methods available', () => {
    const livescore = new Livescore({ key: 'foo', secret: 'bar' })

    expect(typeof livescore.verify).toBe('function')
    expect(typeof livescore.scores).toBe('function')
    expect(typeof livescore.leagues).toBe('function')
    expect(typeof livescore.leaguesFixtures).toBe('function')
    expect(typeof livescore.fixtures).toBe('function')
  })
})
