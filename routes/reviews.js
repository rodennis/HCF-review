import { Router } from 'express'
import * as controllers from '../controllers/reviews.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/reviews', controllers.getReviews)
router.get('/reviews/:id', controllers.geReview)
router.post('/reviews', restrict, controllers.creatReview)
router.put('/reviews/:id', restrict, controllers.updatReview)
router.delete('/reviews/:id', restrict, controllers.deletReview)

export default router