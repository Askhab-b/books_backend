const mongoose = require('mongoose')
const genreSchema = mongoose.Schema({

titleGenre: String,
desctiption: String
    
})

const Genre = mongoose.model('Genre', genreSchema)


module.exports = Genre