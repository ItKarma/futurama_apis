import { Router } from 'express'
import Controller from '../controller/controller.js'

const router = Router()

router.post('/creatAccount', new Controller().singUp)
router.post('/Authenticate', new Controller().auth)

export default router
