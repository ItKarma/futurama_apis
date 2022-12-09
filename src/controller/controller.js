import SingUpCase from '../service/singup-use-case.js'
import User from '../repository/repositoryDb.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import secret from '../config/config.js'

function gerenateToken (params = {}) {
  return jwt.sign(params, secret.secrete, { expiresIn: 84600 })
}
export default class Controller {
  async singUp (req, res) {
    try {
      const { email, name, password, reappassword } = req.body
      const resp = await new SingUpCase().singupCase(email, name, password, reappassword)

      res.json({ resp, token: gerenateToken({ id: resp._id }) })
    } catch (error) {
      res.json({ error: 'try again later' })
    }
  }

  async auth (req, res) {
    const { email, password } = req.body
    try {
      const user = await new User().findUser(email)

      if (!user) return res.status(400).json({ error: 'user not found' })

      if (!await bcrypt.compare(password, user[0].password)) return res.status(400).json({ error: 'password invalid' })

      user[0].password = undefined

      return res.json({ user, token: gerenateToken({ id: user._id }) })
    } catch (error) {
      return res.json({ erro: error })
    }
  }
}
