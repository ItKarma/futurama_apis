
import user from '../models/userModel.js'

export default class UserRepositorie {
  async saveUser (email, name, password, apiKey) {
    return user.create({ email, name, password, apiKey })
  }

  async findUser (userEmail) {
    const finduser = await user.findOne({ email: userEmail })
    return finduser
  }

  async findUsers (userEmail) {
    const finduser = await user.find({ email: userEmail })
    return finduser
  }
}
