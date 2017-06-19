const mongoose = require('mongoose')

const { Schema } = mongoose

const TodoSchema = new Schema({
  todo: {
    type: String,
    required: true,
    validate: {
      validator: todo => todo.length > 0,
      message: 'Todo must be entered'
    }
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model('todo', TodoSchema)

module.exports = Todo