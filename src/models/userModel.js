import { Schema, model } from 'mongoose'
// import Key from './keyModel.js'
import bcrypt from 'bcrypt'

const User = Schema({
  name: {
    type: String,
    require: true

  },
  email: {
    unic: true,
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  apiKey: {
    unic: true,
    type: String,
    require: false
  }
})

User.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

const user = model('Users', User)

export default user
