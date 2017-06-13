const Todo = require('../models/todo_model')

module.exports = {

  readTodos(req, res, next) {
    Todo.find()
      .then(todos => res.send(todos).status(200))
      .catch(() => {
        res.send({ error: 'Unable to retrieve todos from database' }).status(500)
        next()
      })
  },

  createTodo(req, res, next) {
    Todo.create(req.body)
      .then(todo => res.send(todo).status(201))
      .catch(() => {
        res.send({ error: 'Todo unsuccessfully created' }).status(500)
        next()
      })
  },

  updateTodo(req, res, next) {
    const { _id, todo, completed } = req.body
    Todo.findByIdAndUpdate({ _id }, { todo, completed })
      .then(() => Todo.findById({ _id }))
      .then(updatedTodo => res.send(updatedTodo).status(200))
      .catch(() => {
        res.send({ error: 'Updates not applied to todo' }).status(500)
        next()
      })
  },

  deleteTodo(req, res, next) {
    Todo.findByIdAndRemove({ _id: req.body._id })
      .then(() => res.send({ message: 'Todo successfully removed' }).status(200))
      .catch(() => {
        res.send({ error: 'Todo not removed' }).status(500)
        next()
      })
  }
}