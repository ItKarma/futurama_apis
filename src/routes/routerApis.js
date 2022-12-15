import { Router } from 'express'
import ApisController from '../controllers/apisController.js'
import Auth from '../middlewares/auth.js'

const router = Router()

router.get('/', Auth, new ApisController().ok)

export default router
