import {
  INPUT_VALUE,
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  // TOGGLE_TODO,
  TOGGLE_ALL
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
    case DELETE_TODO:
      {
        const updatedTodos = state.todos.filter(todo => todo._id !== action.payload)
        return { ...state, todos: [...updatedTodos] }
      }
    case TOGGLE_ALL:
      return { ...state, todos: [...action.payload] }
    default:
      return state
  }
}

export default todosReducer