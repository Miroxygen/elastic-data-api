import { Client } from "@elastic/elasticsearch";

/**
 * Gets data from ElasticSearch.
 */
export class GetElasticData {
  constructor(client = new Client) {
    this.client = client
  }

  /**
   * Gets all data from a specific source.
   * @param {string} index The index to fetch from.
   * @param {string} source The specific source to fetch from.
   * @returns 
   */
  async getSourceData(index, source) {
    const response = await this.client.search({
      index: index,
      body: {
        size : 10000,
        _source : [source],
              query : {
                match_all : {}
              }
      }
    })
    return response
  }

  /**
   * Get aggregation data based on terms.
   * @param {string} index Index of data.
   * @param {string} terms The terms of the data.
   * @param {string} sum The field for the sum.
   * @returns 
   */
  async getTermAggregationData(index, terms, sum) {
    const response = await this.client.search({
      index: index,
      body: {
        size: 10000,
        aggs: {
          language_type: {
            terms: {
              field : "lang.keyword"
            },
            aggs: {
              tweet_count: {
                sum: {
                  field: "userTweetCount"
                }
              }
            }
          }
        }
      }
    })
    return response
  }
}