import { Schema, model } from 'mongoose'

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

const user = model('Users', User)

export default user
