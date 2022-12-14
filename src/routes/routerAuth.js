import { Router } from 'express'
import AuthController from '../controllers/authController.js'

const router = Router()

router.post('/auth/singup', new AuthController().singUp)
router.post('/auth/Authenticate', new AuthController().auth)

export default router
