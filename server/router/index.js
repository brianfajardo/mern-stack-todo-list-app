const todosController = require('../controllers/todos_controller')

const {
  readTodos,
  createTodo
 } = todosController

module.exports = (app) => {
  app.get('/todos', readTodos)
  app.post('/todos', createTodo)
}