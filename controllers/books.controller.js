const {
    findByIdAndDelete,
    findByIdAndRemove,
} = require("../models/book.model")


const Book = require('../models/book.model')

module.exports.booksController = {

postBooks: (req, res) => {
Book.create({
title: req.body.title,
author: req.body.author,
genre: req.body.genre
}).then((data) => {
res.json(data)
}) 
.catch((e) => {
    res.json(e)
})
},

deleteBooks: (req, res) => {
Book.findByIdAndRemove(req.params.id).then((data) => {
res.json('Книга удалена')
})
.catch((e) => {
    res.json(e)
})
},

patchBook: (req, res) => {
Book.findByIdAndUpdate(req.params.id, {
title: req.body.title,
author: req.body.author,
genre: req.body.genre
}).then((data) => {
  res.json(data)  
})
.catch((e) => {
    res.json(e)
})
},

findBooksId: (req, res) => {
Book.findById(req.params.id).then((data) => {
res.json(data)
})
.catch((e) => {
    res.json(e)
})
},

findAllBooks: (req, res) => {
Book.find().then((data) => {
res.json(data)
})
.catch((e) => {
    res.json(e)
})
},

BookByGenre: (req, res) => {
Book.find("genre").populate('author')
.then((data) => {
    res.json(data)
})
.catch((e) => {
    res.json(e)
})
}



}