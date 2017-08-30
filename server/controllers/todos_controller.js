const Todo = require('../models/todo_model')

module.exports = {

  readTodos(req, res) {
    Todo.find()
      .then(todos => res.send(todos).status(200))
      .catch(() => {
        res.send({ error: 'Unable to retrieve todos from database' }).status(500)
      })
  },

  createTodo(req, res) {
    Todo.create(req.body)
      .then(todo => res.send(todo).status(201))
      .catch(() => {
        res.send({ error: 'Todo unsuccessfully created' }).status(500)
      })
  },

  updateTodo(req, res) {
    const { _id, todo, completed } = req.body
    Todo.findByIdAndUpdate({ _id }, { todo, completed })
      .then(updatedTodo => res.send(updatedTodo).status(200))
      .catch(() => {
        res.send({ error: 'Updates not applied to todo' }).status(500)
      })
  },

  deleteTodo(req, res) {
    Todo.findByIdAndRemove({ _id: req.body._id })
      .then(res.send({ message: 'Todo successfully removed' }).status(200))
      .catch(() => {
        res.send({ error: 'Todo not removed' }).status(500)
      })
  },

  deleteCompleted(req, res) {
    Todo.remove({ completed: true })
      .then(res.send({ message: 'Completed todos removed' }).status(200))
      .catch(() => {
        res.send({ error: 'Completed todos not removed' }.status(500))
      })
  },

  toggleAll(req, res) {
    const countCompleted = Todo.find({ completed: true })
      .count()
      .then(results => results)

    const countTodos = Todo.find()
      .count()
      .then(results => results)

    const doToggle = (operation) => {
      operation
        .then(() => Todo.find())
        .then(updatedTodos => res.send(updatedTodos).status(200))
        .catch(() => {
          res.send({ error: 'Error occurred toggling all todos' }).status(500)
        })
    }

    Promise.all([countCompleted, countTodos])
      .then((results) => {
        const totalCompleted = results[0]
        const totalTodos = results[1]
        const toggleAllFlag = totalCompleted < totalTodos ? 1 : 0
        return toggleAllFlag
      })
      .then((toggleAllFlag) => {
        if (toggleAllFlag) {
          // If total completed < total todos, toggle all to true.
          doToggle(Todo.updateMany({ completed: false }, { completed: true }))
        } else {
          // If total completed === total todos, toggle all to false.
          doToggle(Todo.updateMany({ completed: true }, { completed: false }))
        }
      })
  }
}