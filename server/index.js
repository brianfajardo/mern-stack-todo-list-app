const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./router/')

const app = express()

// Replace Mongoose Bluebird Promise with ES6 Promise
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/todos')

// Middleware
app.use(bodyParser.json())
router(app)

// Fall through errors in trace
app.use((err, req, res, next) => {
  console.log('Fall through err:\n', err)
  next()
})

app.listen(8000, () => console.log('Listening on localhost:8000'))