import { Client } from "@elastic/elasticsearch"

/**
 * Creates a client for ElasticSearch usable across the application.
 */
export const client = new Client({ 
  cloud: {
    id: process.env.ELASTIC_CLOUD_ID,
  },
  auth: {
    username: 'elastic',
    password: process.env.ELASTIC_PASSWORD
  },
 })