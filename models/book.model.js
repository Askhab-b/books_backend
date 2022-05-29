const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({

title: String, 
author: {
ref: 'Author',
type: mongoose.SchemaTypes.ObjectId
},
genre: {
    ref: 'Genre',
    type: mongoose.SchemaTypes.ObjectId
}

})




const Book = mongoose.model('Book', bookSchema)





module.exports = Book