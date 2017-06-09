const {
  readTodos,
  createTodo,
  updateTodo,
  deleteTodo
 } = require('../controllers/todos_controller')
const { toggleAll } = require('../controllers/utils_controller')

module.exports = (app) => {
  app.get('/todos', readTodos)
  app.post('/todos/create', createTodo)
  app.put('/todos/update', updateTodo)
  app.put('/todos/update/toggleall', toggleAll)
  app.delete('/todos/delete', deleteTodo)
}