import { Router } from 'express'
import ApisController from '../controllers/apisController.js'
import Auth from '../middlewares/auth.js'
// import Requests from '../middlewares/visits.js'

const router = Router()

// router.use(Requests)

router.get('/', Auth, new ApisController().ok)

export default router
