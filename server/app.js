const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router/')

const app = express()

// Replace Mongoose Bluebird Promise with ES6 Promise
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/todos')

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
  // Allows express to serve dist directory freely to any request.
  app.use(express.static(path.resolve(__dirname, '../dist')))

  // On GET request to any route (*) of server, send index.html file.
  // Works with BrowserRouter (React-Router)~ YES!
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
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