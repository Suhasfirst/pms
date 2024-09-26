require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Product = require('./model/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()
const port = process.env.PORT

// ** EXPRESS MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ** ROUTES
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send('Hello World Updated LTS')
})

mongoose.connect('mongodb+srv://suhasmaverick:1LKJxXh84xYs6e15@pms.drciu.mongodb.net/?retryWrites=true&w=majority&appName=pms')
    .then(() => {
        console.log('Connected!')
        app.listen(port, () => {
            console.log('Node js servrerr')
        })
    })
    .catch(() => { console.log('Failed') })