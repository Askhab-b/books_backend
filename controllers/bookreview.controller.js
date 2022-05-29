const {
    findByIdAndDelete,
    findByIdAndRemove,
} = require("../models/bookreview.model")



const BookReview = require('../models/bookreview.model')


module.exports.BookReviewController = {

postReview: (req, res) => {
BookReview.findById(req.params.id).create({
textReview: req.body.textReview,
NameAuthor: req.body.NameAuthor,
bookForReview: req.body.bookForReview    
}).then(() => {
    res.json('Рецензия добавлена')
})
.catch((e) => res.json('Ошибка при добавлении рецензии'))
},

deleteBookReview: (req, res) => {
BookReview.findByIdAndRemove(req.params.id).then((data) => {
res.json('Рецензия удалена')
}).catch((e) => res.json('Ошибка при удалении рецензии'))
},

AllReviews: (req, res) => {
BookReview.find({
bookForReview: req.params.id
}).then((data) => {
    res.json(data)
}).catch((e) => res.json('Ошибка при получении рецензии'))
}





}