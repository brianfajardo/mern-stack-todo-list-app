import {
  INPUT_VALUE,
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL,
  DELETE_TODO,
  DELETE_COMPLETED
} from '../constants/actionTypes'

const initialState = {
  inputValue: '',
  todos: []
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return { ...state, inputValue: action.payload }
    case FETCH_TODOS:
      return { ...state, todos: action.payload }
    case ADD_TODO:
      return { inputValue: '', todos: [...state.todos, action.payload] }
    case TOGGLE_TODO:
      {
        const updatedState = state.todos.map(todo =>
          (todo._id === action.payload._id) ? { ...todo, completed: !todo.completed } : todo
        )
        return { ...state, todos: [...updatedState] }
      }
    case TOGGLE_ALL:
      return { ...state, todos: [...action.payload] }
    case DELETE_TODO:
      {
        const updatedState = state.todos.filter(todo => todo._id !== action.payload)
        return { ...state, todos: [...updatedState] }
      }
    case DELETE_COMPLETED:
      {
        const updatedState = state.todos.filter(todo => todo.completed === false)
        return { ...state, todos: [...updatedState] }
      }
    default:
      return state
  }
}

export default todosReducer