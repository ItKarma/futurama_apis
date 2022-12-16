import { Router } from 'express'
import AuthController from '../controllers/authController.js'
// import Requests from '../middlewares/visits.js'
const router = Router()

router.post('/auth/register', new AuthController().singUp)
router.post('/auth/login', new AuthController().authLogin)

export default router
