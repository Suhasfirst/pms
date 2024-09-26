require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Product = require('./model/product.model.js')
const productRoute = require('./routes/product.route.js')
const rateLimit = require('express-rate-limit');
const app = express()
const port = process.env.PORT


// Apply rate limiting to all requests
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later."
});

// ** EXPRESS MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ** ROUTES
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send('Hello World Updated LTS')
})

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected!')
        app.listen(port, () => {
            console.log('Node js servrerr')
        })
    })
    .catch(() => { console.log('Failed') })