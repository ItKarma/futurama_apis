import { Schema, model } from 'mongoose'

const apiKey = Schema({
  email: {
    unic: true,
    type: String,
    required: true
  },
  apiKey: {
    unic: true,
    type: String,
    require: false
  },
  num: {
    type: Number,
    require: false
  }
})

const Key = model('apikeys', apiKey)

export default Key
