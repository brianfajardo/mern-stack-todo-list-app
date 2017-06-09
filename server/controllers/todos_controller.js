const Todo = require('../models/todo_model')

module.exports = {

  readTodos(req, res, next) {
    Todo.find()
      .then(todos => res.send(todos).status(20))
      .catch((err) => {
        console.log('readTodos err:\n', err)
        res.send({ error: 'An error ocurred trying to fetch todos from database' }).status(500)
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
  }
}