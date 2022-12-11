import { Router } from 'express'
import AuthController from '../controllers/authController.js'

const router = Router()

router.post('/creatAccount', new AuthController().singUp)
router.post('/Authenticate', new AuthController().auth)

export default router
