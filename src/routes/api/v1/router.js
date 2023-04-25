import express from 'express'
import { router as resourceRouter } from './resource-router.js'

export const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message : "Welcome to this simple API for fetching data from my Elastic Cloud. /resource for more."})
})

router.use('/resource', resourceRouter)
