const {Router} = require("express")
const { booksController } = require("../controllers/books.controller")

const router = Router()

router.post('/books', booksController.postBooks)
router.delete('/books/:id', booksController.deleteBooks)
router.patch('/books/:id', booksController.patchBook)
router.get('/books', booksController.findBooksId)
router.get('/books', booksController.findAllBooks)
router.get('/books', booksController.BookByGenre)






module.exports = router







