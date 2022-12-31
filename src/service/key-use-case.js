import KeyRepositorie from '../repositories/key_Repositories.js'
import UserRepositorie from '../repositories/user_Repositories.js'

class KeyUserCase {
  async keyCase (email, key) {
    if ((await new KeyRepositorie().findKey(key)).length > 0) return
    if ((await new KeyRepositorie().findKey(email)).length > 0) return

    await new UserRepositorie().saveKey(email, key)
    const saveUser = await new KeyRepositorie().creatKey(email, key)
    return saveUser
  }
}

export default KeyUserCase
