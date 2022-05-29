const {
    findByIdAndDelete,
    findByIdAndRemove,
} = require("../models/genre.model")



const Genre = require('../models/genre.model')

module.exports.genreController = {

postGenre: (req, res) => {
Genre.create({
titleGenre: req.body.titleGenre,
desctiption: req.body.desctiption
}).then((data) => {
res.json(data)
}) 
.catch((e) => {
    res.json(e)
})
},

deleteGenre: (req, res) => {
Genre.findByIdAndRemove(req.params.id).then((data) => {
res.json('Жанр удалён')
    })
    .catch((e) => {
        res.json(e)
    })
},

AllGenre: (req, res) => {
Genre.find().then((data) => {
    res.json(data)
})
.catch((e) => {
    res.json(e)
})
}, 










}




