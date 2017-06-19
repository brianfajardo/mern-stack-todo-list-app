const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router/')

const app = express()

const URI = 'mongodb://bfajardo15:password15@ds131742.mlab.com:31742/mern-todolist'
// Replace Mongoose Bluebird Promise with ES6 Promise
mongoose.Promise = global.Promise
mongoose.connect(URI) // Production
// mongoose.connect('mongodb://localhost/todos') // Development


// Middleware
app.use(cors())
app.use(bodyParser.json())
router(app)

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.config')
  const webpackMiddleware = require('webpack-dev-middleware')
  app.use(webpackMiddleware(webpack(webpackConfig)))
} else {
  // Allow Express to serve 'dist' directory freely to any request.
  app.use(express.static(path.join(__dirname, '../dist')))

  // On GET request to any route ('*') of server, send index.html file.
  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
    next()
  })
}

// Fall through errors in trace
app.use((err, req, res, next) => {
  console.log('Fall through err:\n', err)
  next()
})

app.listen(process.env.PORT || 8000, () => {
  console.log(`Listening on ${process.env.PORT || 'localhost:8000'}`)
})