const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({ message: 'Hello!' })
})

app.listen(8000, () => console.log('Listening on local host 8000'))