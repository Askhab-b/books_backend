const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const bookreviewSchema = mongoose.Schema({

textReview: String,
NameAuthor: String,
bookForReview: {
ref: 'Book',
type: mongoose.SchemaTypes.ObjectId
}

})

const BookReview = mongoose.model('BookReview', bookreviewSchema)



module.exports = BookReview