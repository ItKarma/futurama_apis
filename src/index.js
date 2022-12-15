import express from 'express'
import authRouter from './routes/routerAuth.js'
import apisRouter from './routes/routerApis.js'
import connectionDb from './db/connection.js'
import cors from 'cors'

const app = express()

connectionDb()

app.use(cors())

app.use(express.json())
app.use(authRouter)
app.use(apisRouter)

app.listen(4000, () => {
  console.log('App running')
})
