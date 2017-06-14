import { combineReducers } from 'redux'
import todosReducer from './todos_reducer'

const rootReducer = combineReducers({
  todoList: todosReducer
})

export default rootReducer