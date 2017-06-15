const {
  readTodos,
  createTodo,
  updateTodo,
  toggleAll,
  deleteTodo,
  deleteCompleted
 } = require('../controllers/todos_controller')

const router = (app) => {
  app.get('/todos', readTodos)
  app.post('/todos/create', createTodo)
  app.put('/todos/update', updateTodo)
  app.put('/todos/update/all', toggleAll)
  app.delete('/todos/delete', deleteTodo)
  app.delete('/todos/delete/completed', deleteCompleted)
}

module.exports = router