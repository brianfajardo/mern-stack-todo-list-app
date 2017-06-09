const todosController = require('../controllers/todos_controller')

const {
  readTodos,
  createTodo,
  updateTodo,
  deleteTodo
 } = todosController

module.exports = (app) => {
  app.get('/todos', readTodos)
  app.post('/todos/create', createTodo)
  app.put('/todos/update', updateTodo)
  app.delete('/todos/delete', deleteTodo)
}