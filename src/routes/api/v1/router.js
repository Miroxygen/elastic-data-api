import express from 'express'
import { router as resourceRouter } from './resource-router.js'

export const router = express.Router()

router.get('/', () => {
  res.json({ message : "Welcome to this simple API for fetching data from my Elastic Cloud. /resources for more."})
})

router.use('/', resourceRouter)
