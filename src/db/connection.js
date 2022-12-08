import mongoose from 'mongoose'

export default async function connectionDb () {
  mongoose.set('strictQuery', true)
  const db = mongoose.connect('mongodb+srv://Lopes01:Lopes01@cluster0.evxl2c8.mongodb.net/Userdb?retryWrites=true&w=majority')

  db.then(() => {
    console.log('Connected to database')
  }).catch((err) => {
    console.log(err)
  })
}
