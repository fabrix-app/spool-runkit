'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: {
    models: { },
    controllers: {
      RunkitController: class RunkitController {
        runkitEndpoint (request) {

        }
      }
    },
    services: { }
  },
  config: {
    main: {
      spools: [
        require('../dist').RunkitSpool
      ]
    },
    runkit: {
      context: { }
    }
  }
}, smokesignals.FailsafeConfig)


