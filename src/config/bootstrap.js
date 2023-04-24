/**
 * Module for bootstrapping.
 */

import { IoCContainer } from "../utils/IocContainer.js"
import { GetElasticData } from "../services/getElasticData.js"
import { SortElasticData } from "../services/sortElasticData.js"
import { ResourceController } from "../controllers/resourceController.js"
import { client } from "../services/elasticClient.js"


const iocContainer = new IoCContainer()

iocContainer.register('GetElasticData', GetElasticData, {
  singleton : true,
  dependencies : [
    "ElasticClient"
  ]
})

iocContainer.register('SortElasticData', SortElasticData, {
  singleton : true
})

iocContainer.register('ElasticClient', client, {
  singleton : true
})

iocContainer.register('ResourceController', ResourceController, {
  singleton: true,
  dependencies : [
    "GetElasticData",
    "SortElasticData"
  ]
})

export const container = Object.freeze(iocContainer)
