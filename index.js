const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json());
app.use(require('./routes/books.route'))
app.use(require('./routes/genre.route'))
app.use(require('./routes/bookReview.route'))



mongoose.connect("mongodb+srv://Askhab:askhab622@cluster0.gutn8.mongodb.net/?retryWrites=true&w=majority", {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log("Успешное соединение с сервером MongoDB"))
.catch(() => console.log("Ошибка при соединении с сервером MongoDB"))



app.listen(4000, () => {
    console.log('Сервер запущен')
})