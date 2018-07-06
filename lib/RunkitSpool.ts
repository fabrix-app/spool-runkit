import { Spool } from '@fabrix/fabrix/dist/common'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class RunkitSpool extends Spool {

  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })
  }

  async validate () {
    if (!this.app.config.get('runkit.context')) {
      throw new Error('config.runkit.context must be properly set')
    }
  }

  /**
   * Create the runkit endpoint from the RunkitController.runkitEndpoint handler
   */
  configure () {
    const RunkitController = this.app.controllers.RunkitController
    const context = this.app.config.get('runkit.context')

    context.endpoint = function (request, response) {
      response.end(RunkitController.runkitEndpoint(request))
    }
  }
}

