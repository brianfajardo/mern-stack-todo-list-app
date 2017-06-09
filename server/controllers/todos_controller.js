const Todo = require('../models/todo_model')

module.exports = {

  readTodos(req, res, next) {
    Todo.find()
      .then(todos =>
        todos.length === 0
          ? res.send({ message: 'Add some todos!' }).status(200)
          : res.send(todos).status(200)
      )
      .catch((err) => {
        console.log('readTodos err:\n', err)
        res.send({ error: 'Error occurred trying to fetch todos from database' }).status(500)
        next()
      })
  },

  createTodo(req, res, next) {
    Todo.create(req.body)
      .then(todo => res.send(todo).status(201))
      .catch((err) => {
        console.log('createTodo err:\n', err)
        res.send({ error: 'Error occurred trying to create todo' }).status(500)
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
        res.send({ error: 'Error occurred trying to update todo' }).status(500)
        next()
      })
  },

  deleteTodo(req, res, next) {
    Todo.findByIdAndRemove({ _id: req.body._id })
      .then(() => res.send({ message: 'Todo successfully removed' }).status(200))
      .catch((err) => {
        console.log('deleteTodo err:\n', err)
        res.send({ error: 'Error occurred trying to remove todo' }).status(500)
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
        res.send({ error: 'Error occurred trying to toggle completed status of todo' }).status(500)
        next()
      })
  },

  toggleAll(req, res, next) {
    const countCompleted = new Promise((resolve, reject) => {
      Todo.find({ completed: true })
        .count()
        .then(results => resolve(results))
        .catch((err) => {
          console.log('toggleAll -> countCompleted Promise err\n', err)
          reject()
        })
    })

    const countAll = new Promise((resolve, reject) => {
      Todo.find()
        .count()
        .then(results => resolve(results))
        .catch((err) => {
          console.log('toggleAll -> countAll Promise err\n', err)
          reject()
        })
    })

    const toggleAll = (mongoOperation) => {
      mongoOperation
        .then(results => res.send(results).status(400))
        .catch((err) => {
          console.log('toggleAll err:\n', err)
          res.send({ error: 'Error occurred trying to toggle the completed status of all todos' })
            .status(500)
          next()
        })
    }

    Promise.all([countCompleted, countAll])
      .then((results) => {
        const totalCompleted = results[0]
        const totalTodos = results[1]
        let toggleAllFlag
        totalCompleted < totalTodos ? toggleAllFlag = true : toggleAllFlag = false
        return toggleAllFlag
      })
      .then((toggleAllFlag) => {
        switch (toggleAllFlag) {
          // If total completed < total todos ~> toggle all to true
          case true: {
            toggleAll(Todo.updateMany({ completed: false }, { completed: true }))
            break
          }
          // If total completed === total todos ~> toggle all to false
          case false: {
            toggleAll(Todo.updateMany({ completed: true }, { completed: false }))
            break
          }
          // Unsure if a default case is needed when switching
          // on a Boolean type since switch cases are predictable.
          default: {
            console.log('toggleAll switch statement did not find a match case!')
            next()
          }
        }
      })
  }
}