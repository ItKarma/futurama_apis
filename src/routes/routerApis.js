import { Router } from 'express'
import ApisController from '../controllers/apisController.js'

const router = Router()
router.get('/', new ApisController().ok)

export default router
