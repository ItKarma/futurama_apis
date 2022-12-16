let counter = 0
const getRoute = (req) => {
  const route = req.route ? req.route.path : '' // check if the handler exist
  // const baseUrl = req.baseUrl ? req.baseUrl : '' // adding the base url if the handler is child of other handler

  for (let i = 0; i < counter; counter++) {
    console.log(counter)
  }
  return route
}

const Requests = (req, res, next) => {
  res.on('finish', () => {
    // const stats = readStats()
    const event = `${req.method} ${getRoute(req)} ${res.statusCode}`
    console.log(event)
    // dumpStats(conter)
  })
  next()
}

export default Requests
