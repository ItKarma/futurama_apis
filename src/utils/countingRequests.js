import KeyRepositorie from '../repositories/key_Repositories.js'

async function getCountByKey (apiKey) {
  try {
    const counter = await new KeyRepositorie().findOneKey(apiKey)
    if (counter === null) return
    const num = counter.num + 1
    await new KeyRepositorie().setNum(apiKey, num)
    return counter
  } catch (error) {
    console.log('get count by name is error: ', error)
  }
}

export default getCountByKey
