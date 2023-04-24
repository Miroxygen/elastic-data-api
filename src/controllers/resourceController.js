import { GetElasticData } from "../services/getElasticData.js";
import { SortElasticData } from "../services/sortElasticData.js";


/**
 * Controller for resources.
 */
export class ResourceController {
  constructor(fetchData = new GetElasticData, sortData = new SortElasticData) {
    this.fetchData = fetchData
    this.sortData = sortData
  }

  /**
   * Gets a specific source data from ElasticSearch.
   * @param {object} req Express req object.
   * @param {object} res Express res object.
   */
  async getSourceResource(req, res) {
    try {
      const data = await this.fetchData.getSourceData(req.params.index, req.params.source)
      const sortedData = this.sortData.sortSourceData(data, req.params.source)
      res
      .status(200)
      res.setHeader('Content-Type', 'application/json')
      .json({ sortedData })
    } catch (error) {
      if(error.statusCode === 404) {
        res
        .status(404)
        .json({ message : "Requested resource not found."})
      } else {
        res
        .status(500)
        .json({ message : "Internal server error."})
      }
    }  
  }

  /**
   * Get aggregation data with terms.
   */
  async getTermAggregationData(req, res) {
    try {
      const data = await this.fetchData.getTermAggregationData(req.params.index, req.params.terms, req.params.sum)
      const aggregations = data.aggregations
      console.log(aggregations)
      res
      .status(200)
      res.setHeader('Content-Type', 'application/json')
      .json({ aggregations })
    } catch (error) {
      if(error.statusCode === 404) {
        res
        .status(404)
        .json({ message : "Requested resource not found."})
      } else {
        res
        .status(500)
        .json({ message : "Internal server error."})
      }
    }
  }
}