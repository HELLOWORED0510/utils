const path = require('path')
module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    testEnvironment: 'jsdom',
  },
  verbose: true,
}
