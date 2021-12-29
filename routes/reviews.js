import { Router } from 'express'
import * as controllers from '../controllers/reviews.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/reviews', controllers.getReviews)
router.get('/reviews/:id', controllers.getReview)
router.post('/reviews', restrict, controllers.createReview)
router.put('/reviews/:id', restrict, controllers.updateReview)
router.delete('/reviews/:id', restrict, controllers.deleteReview)

export default router