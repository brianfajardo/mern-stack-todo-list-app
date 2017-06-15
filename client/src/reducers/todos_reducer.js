import {
  INPUT_VALUE,
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO
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
        const updatedState = state.todos.filter(todo => todo._id !== action.payload)
        return { ...state, todos: [...updatedState] }
      }
    case TOGGLE_TODO:
      {
        console.log('TOGGLE TODO --->', action)
        return state
      }
    default:
      return state
  }
}

export default todosReducer