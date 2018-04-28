# livescore

[![Codeship Status for ndelvalle/livescore](https://app.codeship.com/projects/aef1fb60-1d95-0136-a767-1e122402486a/status?branch=master)](https://app.codeship.com/projects/284751)
[![Coverage Status](https://coveralls.io/repos/github/ndelvalle/livescore/badge.svg?branch=master)](https://coveralls.io/github/ndelvalle/livescore?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/ndelvalle/livescore/badges/score.svg)](https://www.bithound.io/github/ndelvalle/livescore)
[![bitHound Dependencies](https://www.bithound.io/github/ndelvalle/livescore/badges/dependencies.svg)](https://www.bithound.io/github/ndelvalle/livescore/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/ndelvalle/livescore/badges/devDependencies.svg)](https://www.bithound.io/github/ndelvalle/livescore/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/ndelvalle/livescore/badges/code.svg)](https://www.bithound.io/github/ndelvalle/livescore)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-green)](https://github.com/prettier/prettier)


Javascript client to comunicate with [livescore api](http://livescore-api.com/) that provides information about football leagues, cups, international matches in all major football federations around the world. It also provide feeds for many minor leagues. 


## Install

```bash
$ npm install --save livescore-client
```

```bash
$ yarn add livescore-client
```

## Usage

[Signup](http://livescore-api.com/users/sign-up) on the livescore api webpage to get a real key and secret

```js
import Livescore from 'livescore-client'

const key = 'demo_key'
const secret = 'demo_secret'
const livescore = new Livescore({ key, secret })
```

#### `livescore.verify()`

Validates the api key and secret pair

```js
livescore.verify()
  .then((response) => {
    console.log(response)
    // {
    //   "success": true,
    //   "data": { "message": "You API key and API secret are working correctly" }
    // }
  })
```

#### `livescore.scores([options])`

Get the current live scores. The response can be filtered by league or country.

```js
livescore.scores({
  league: 73,
  country: 47
})
  .then((response) => {
    console.log(response)
    // {
    //   "success": true,
    //   "data": {
    //     "match": [
    //       {
    //         "id": "14",
    //         "home_name": "CSD Comunicaciones",
    //         "away_name": "Coban Imperial",
    //         "score": "0 - 0",
    //         "ht_score": "0 - 0",
    //         "ft_score": "",
    //         "et_score": "",
    //         "time": "36",
    //         "league_id": "73",
    //         "status": "IN PLAY",
    //         "added": "2017-11-16 00:40:21",
    //         "last_changed": "2017-11-16 00:40:21",
    //         "home_id": "0",
    //         "away_id": "188",
    //         "events": false,
    //         "league_name": "Liga Nacional:: apertura"
    //       },
    //       ...
    //     ]
    //   }
    // }
  })
```


## License
[MIT License](https://github.com/ndelvalle/livescore/blob/master/LICENSE)
