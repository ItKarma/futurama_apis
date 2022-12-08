import SingUpCase from '../service/singup-use-case.js'

export default class Controller {
  async singUp (req, res) {
    const { email, name, password, reappassword } = req.body
    const resp = await new SingUpCase().singupCase(email, name, password, reappassword)
    res.json({ resp })
  }
}
