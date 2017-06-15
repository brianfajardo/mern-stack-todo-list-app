const {
  readTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleAll
 } = require('../controllers/todos_controller')

const router = (app) => {
  app.get('/todos', readTodos)
  app.post('/todos/create', createTodo)
  app.put('/todos/update', updateTodo)
  app.put('/todos/update/toggleall', toggleAll)
  app.delete('/todos/delete', deleteTodo)
}

module.exports = router