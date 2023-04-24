


/**
 * Sorts data from Elastic into an array.
 */
export class SortElasticData {

  /**
   * Sorts data fecthed with a _source parameter.
   * @param {object} data Dataobject.
   * @param {string} value The value of the source parameter.
   * @returns Array of strings.
   */
  sortSourceData(data, value) {
    const container = []
    for (let i = 0; i < data.hits.hits.length; i++) {
      container.push(data.hits.hits[i]._source[value])
    }
    return container
  }

  sortAggregationData() {
    
  }
}