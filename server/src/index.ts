import dotenv from 'dotenv'
dotenv.config()

import app from './utils/app' // (server)
import mongo from './utils/mongo' // (database)
import { PORT } from './constants/index'
import authRoutes from './routes/auth'
import inventoryRoutes from './routes/inventory'
import transactionRoutes from './routes/transaction'
import taskRoutes from './routes/task'
import accountRoutes from './routes/account'

const bootstrap = async () => {
  await mongo.connect()

  app.get('/', (req, res) => {
    res.status(200).send('Hello, world!')
  })

  app.get('/healthz', (req, res) => {
    res.status(204).end()
  })

  app.use('/auth', authRoutes)

  app.use('/inventory', inventoryRoutes)

  app.use('/transaction', transactionRoutes)
  
  app.use('/task', taskRoutes)

  app.use('/account', accountRoutes)

  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`)
  })
}

bootstrap()
