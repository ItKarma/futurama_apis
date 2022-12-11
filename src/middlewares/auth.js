import jwt from 'jsonwebtoken'
import secret from '../config/config.js'

const Auth = async (req, res, next) => {
  const authHeader = req.headers.session

  if (!authHeader) return res.status(400).json({ error: 'not token provided' })

  const parts = authHeader.split(' ')

  if (!parts.length === 2) return res.status(400).json({ error: 'token error' })

  const [Scheme, token] = parts

  if (!/^Bearer$/i.test(Scheme)) return res.status(400).json({ error: 'token malformatted' })

  jwt.verify(token, secret.secrete, (err, decoded) => {
    if (err) return res.status(400).json({ error: 'token invalid' })
    req.userId = decoded.id

    return next()
  })

  next()
}

export default Auth
