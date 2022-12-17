import getCountByKey from '../utils/countingRequests.js'

export default class ApisController {
  async ok (req, res) {
    const key = req.query.apiKey
    res.json({ message: 'kkkk' })
    getCountByKey(key)
  }
}
