const Todo = require('../models/todo_model')

// Current implementation to toggle all todos requires 3 touches to DB.
// Reducing the number of touches should optimize speeds.

module.exports = {

  toggleAll(req, res, next) {
    const totalCompleted = Todo.find({ completed: true }).count()
      .then(results => results)

    const totalTodos = Todo.find().count()
      .then(results => results)

    const doToggle = (operation) => {
      operation
        .then(() => res.send({ message: 'All todos completed prop toggled' }).status(400))
        .catch(() => {
          res.send({ error: 'Error occurred toggling all todos' }).status(500)
          next()
        })
    }

    Promise.all([totalCompleted, totalTodos])
      .then((results) => {
        const toggleAllFlag = results[0] < results[1] ? 1 : 0
        return toggleAllFlag
      })
      .then(toggleAllFlag =>
        toggleAllFlag
          // If total completed < total todos, toggle all to true.
          ? doToggle(Todo.updateMany({ completed: false }, { completed: true }))
          // If total completed === total todos, toggle all to false.
          : doToggle(Todo.updateMany({ completed: true }, { completed: false }))
      )
  }
}