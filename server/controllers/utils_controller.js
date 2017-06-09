const Todo = require('../models/todo_model')

// Current implementation to toggle all todos between requires 3 touches to DB.
// Reducing the number of touches should optimize speeds.

module.exports = {

  toggleAll(req, res, next) {
    const countCompleted = Todo.find({ completed: true }).count()
      .then(results => results)

    const countAll = Todo.find().count()
      .then(results => results)

    const doToggle = (mongoOperation) => {
      mongoOperation
        .then(results => res.send(results).status(400))
        .catch(() => {
          res.send({ error: 'Error occurred toggling all todos' }).status(500)
          next()
        })
    }

    Promise.all([countCompleted, countAll])
      .then((results) => {
        let toggleAllFlag
        results[0] < results[1] ? toggleAllFlag = true : toggleAllFlag = false
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