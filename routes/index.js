import { Router } from 'express'
import reviewsRoutes from './reviews.js'
import usersRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRoutes)
router.use('/', reviewsRoutes)

export default router