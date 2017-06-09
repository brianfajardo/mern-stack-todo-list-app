const mongoose = require('mongoose')

const { Schema } = mongoose

const TodoSchema = new Schema({
  todo: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model('todo', TodoSchema)

module.exports = Todo