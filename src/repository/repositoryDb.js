import user from '../models/userModel.js'

export default class User {
  async saveUser (email, name, password) {
    return user.create({ email, name, password })
  }

  async findUser (email) {
    return user.find({ email })
  }
}
