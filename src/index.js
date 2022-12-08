import express from 'express'
import router from './routes/routerSingUp.js'
import connectionDb from './db/connection.js'
const app = express()

connectionDb()

app.use(express.json())
app.use(router)

app.listen(3000, () => {
  console.log('App running')
})
