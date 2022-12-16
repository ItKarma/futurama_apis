import SingUpCase from '../service/singup-use-case.js'
import User from '../repositories/user_Repositories.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import secret from '../config/config.js'

function gerenateToken (params = {}) {
  return jwt.sign(params, secret.secrete, { expiresIn: 84600 })
}

export default class authController {
  async singUp (req, res) {
    const { email, name, password, reappassword } = req.body

    try {
      if (!name) return res.status(400).json({ error: 'name is required' })
      if (!email) return res.status(400).json({ error: 'email is required' })
      if (!password) return res.status(400).json({ error: 'password is required' })
      if (!reappassword) return res.status(400).json({ error: 'password confirm is required' })

      const resSave = await new SingUpCase().singupCase(email, name, password, reappassword)

      res.json({ resSave, token: gerenateToken({ id: resSave._id }) })
    } catch (error) {
      res.status(400).json({ error: 'try again later' })
    }
  }

  async authLogin (req, res) {
    const { email, password } = req.body

    try {
      if (!email) return res.status(400).json({ error: 'email is required' })
      if (!password) return res.status(400).json({ error: 'password is required' })

      const user = await new User().findUser(email)

      if (!user) return res.status(400).json({ error: 'user not found' })

      if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({ error: 'password invalid' })
      }

      user.password = undefined

      return res.json({ user, token: gerenateToken({ id: user._id }) })
    } catch (error) {
      return res.json({ erro: error })
    }
  }
}
