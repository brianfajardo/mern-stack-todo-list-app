const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router/')
const { MLAB_URI } = require('./keys/index')

const app = express()
const PORT = process.env.PORT || '8000'

// Replace Mongoose Bluebird Promise with ES6 Promise
mongoose.Promise = global.Promise
mongoose.connect(MLAB_URI, () => console.log('mLab connection established'))

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
  app.use(express.static(path.resolve(__dirname, '../dist')))
  // On GET request to any route ('*') of server, send index.html file.
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')))
}

app.listen(PORT, () => console.log(`Listening on ${PORT}`))