const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router/')

const app = express()
const PORT = process.env.PORT || '8000'

// Replace Mongoose Bluebird Promise with ES6 Promise
mongoose.Promise = global.Promise

if (process.env.NODE_ENV !== 'production') {
  // Development. Using localhost mongoDB
  mongoose.connect('mongodb://localhost/todos')
} else {
  // Production. MLAB_URI set in Heroku environment variables.
  mongoose.connect(process.env.MLAB_URI, () => console.log('mLab connection established'))
}

// Middleware
app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.config')
  const webpackMiddleware = require('webpack-dev-middleware')
  app.use(webpackMiddleware(webpack(webpackConfig)))
} else {
  // Allow Express to serve 'dist' directory freely to any request.
  app.use(express.static('../dist'))
  // On GET request to any route ('*') of server, send index.html file.
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')))
}

router(app)

// Fall through errors in trace
app.use((err, req, res, next) => {
  console.log('Fall through err:\n', err)
  next()
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))