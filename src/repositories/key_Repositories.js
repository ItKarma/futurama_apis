import Key from '../models/keyModel.js'

export default class KeyRepositorie {
  async creatKey (email, apiKey) {
    const value = await Key.create({ email, apiKey, num: 0 })
    return value
  }

  async findOneKey (key) {
    const value = await Key.findOne({ apiKey: key })
    return value
  }

  async findKey (apiKey) {
    const value = await Key.find({ apiKey })
    return value
  }

  async setNum (apiKey, num) {
    const value = await Key.findOneAndUpdate({ apiKey }, { $set: { num } }, { upsert: true })
    return value
  }
}
