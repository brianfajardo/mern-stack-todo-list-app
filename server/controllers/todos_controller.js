const Todo = require('../models/todo_model')

module.exports = {

  readTodos(req, res, next) {
    Todo.find()
      .then(todos =>
        (todos.length === 0
          ? res.send({ message: 'Add some todos!' }).status(200)
          : res.send(todos).status(200))
      )
      .catch((err) => {
        console.log('readTodos err:\n', err)
        res.send({ error: 'An error occurred trying to fetch todos from database' }).status(500)
        next()
      })
  },

  createTodo(req, res, next) {
    Todo.create(req.body)
      .then(todo => res.send(todo).status(201))
      .catch((err) => {
        console.log('createTodo err:\n', err)
        res.send({ error: 'An error occurred trying to create todo' }).status(500)
        next()
      })
  },

  updateTodo(req, res, next) {
    const { _id, todo } = req.body
    Todo.findByIdAndUpdate({ _id }, { todo })
      .then(() => Todo.findById({ _id }))
      .then(updatedTodo => res.send(updatedTodo).status(200))
      .catch((err) => {
        console.log('updateTodo err:\n', err)
        res.send({ error: 'An error occurred trying to update todo' }).status(500)
        next()
      })
  },

  deleteTodo(req, res, next) {
    Todo.findByIdAndRemove({ _id: req.body._id })
      .then(() => res.send({ message: 'Todo successfully removed' }).status(200))
      .catch((err) => {
        console.log('deleteTodo err:\n', err)
        res.send({ error: 'An error occurred trying to remove todo' }).status(500)
        next()
      })
  },

  toggleOne(req, res, next) {
    const { _id, completed } = req.body
    Todo.updateOne({ _id }, { completed: !completed })
      .then(() => Todo.findById({ _id }))
      .then(toggledTodo => res.send(toggledTodo).status(200))
      .catch((err) => {
        console.log('toggleOne err:\n', err)
        res.send({ error: 'An error occurred trying to toggle completed status of todo' }).status(500)
        next()
      })
  },

  toggleAll(req, res, next) {
    // if total completed < total todos ~> toggle all to true
    // if total completed === total todos ~> toggle all to false
    Todo.updateMany({ completed: false }, { completed: true })
      .then(results => res.send(results).status(400))
      .catch((err) => {
        console.log('toggleAll err:\n', err)
        res.send({ error: 'An error occurred trying to toggle the completed status of all todos' }).status(500)
        next()
      })
  }
}