const {Router} = require("express")
const { BookReviewController } = require("../controllers/bookreview.controller")

const router = Router()


router.post('/reviews', BookReviewController.postReview)
router.delete('/reviews/:id', BookReviewController.deleteBookReview)
router.get('/reviews', BookReviewController.AllReviews)






module.exports = router
