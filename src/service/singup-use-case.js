import User from '../repositories/user_Repositories.js'

class SingUpCase {
  async singupCase (email, name, password, reappassword) {
    if (password === reappassword) {
      if ((await new User().findUsers(email)).length > 0) return
      const saveUser = await new User().saveUser(email, name, password)
      return saveUser
    }
  }
}

export default SingUpCase
