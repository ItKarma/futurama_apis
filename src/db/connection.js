import mongoose from 'mongoose'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export default async function connectionDb () {
  mongoose.set('strictQuery', true)
  const db = mongoose.connect(process.env.URL_DB)

  db.then(() => {
    console.log('Connected to database')
  }).catch((err) => {
    console.log(err)
  })
}
