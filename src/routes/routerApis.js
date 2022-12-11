import { Router } from 'express'
import ApisController from '../controllers/apisController.js'
import Auth from '../middlewares/auth.js'

const router = Router()

router.use(Auth)

router.get('/', new ApisController().ok)

export default router
