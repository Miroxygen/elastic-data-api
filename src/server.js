import express from 'express'
import helmet from 'helmet'
import { router } from './routes/router.js'
import 'dotenv/config'
import { container } from './config/bootstrap.js'
import cors from 'cors'

try {

  const app = express()

  app.use(cors())

  app.set('container', container)

  app.use(helmet())

  app.use(express.json())

  app.use('/', router)

  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  })
} catch (error) {
  console.log(error)
}
