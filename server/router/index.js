const todosController = require('../controllers/todos_controller')

const {
  readTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleOne,
  toggleAll
 } = todosController

module.exports = (app) => {
  app.get('/todos', readTodos)
  app.post('/todos/create', createTodo)
  app.put('/todos/update', updateTodo)
  app.put('/todos/update/toggleone', toggleOne)
  app.put('/todos/update/toggleall', toggleAll)
  app.delete('/todos/delete', deleteTodo)
}