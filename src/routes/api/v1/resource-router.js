import express from "express"
import 'dotenv/config'

export const router = express.Router()

const resolvedResourceController = (req) => req.app.get('container').resolve('ResourceController')

router.get('/', (req, res) => {
  res.json({ message : "/source/:index/:source for getting data from a source query. /term-aggregation/:index/:terms/:sum to get a certain term aggregated data."})
})

router.get('/source/:index/:source', async (req, res) => {
    await resolvedResourceController(req).getSourceResource(req, res)
})

router.get('/term-aggregation/:index/:terms/:sum', async (req, res) => {
  await resolvedResourceController(req).getTermAggregationData(req, res)
})