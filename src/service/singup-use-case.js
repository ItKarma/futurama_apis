import User from '../repository/repositoryDb.js'

class SingUpCase {
  async singupCase (email, name, password, reappassword) {
    if (password === reappassword) {
      if (await new User().findUser(email)) {
        const saveUser = await new User().saveUser(email, name, password)
        return saveUser
      }
    }
  }
}

export default SingUpCase
