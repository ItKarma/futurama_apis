import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const User = Schema({
  name: {
    type: String,
    require: true

  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})

User.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

const user = model('Users', User)

export default user
