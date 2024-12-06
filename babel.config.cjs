const debug = require('debug')

const log = debug('eslint-merge')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`eslint-merge` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env',
    {
      useBuiltIns: 'usage',
      corejs: 3
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets
  }
}
