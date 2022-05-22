import 'dotenv/config'
import express from 'express'
import { connect } from 'mongoose'
import cors from 'cors'

// Routers
import salesRouter from './routes/sales'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

const config = {
  server: {
    port: PORT,
  },
}

if (process.env.MONGODB_URI) {
  connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('Connected to database')
    })
    .catch((error) => console.log('Something went wrong', error))
}

app.use('/api/sales', salesRouter)

app.listen(config.server.port, () => {
  console.log('Server running on port ', PORT)
})
