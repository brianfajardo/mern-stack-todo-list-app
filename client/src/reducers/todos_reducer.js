import {
  INPUT_VALUE,
  FETCH_TODOS,
  ADD_TODO
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
      return { ...state, inputValue: '' }
    default:
      return state
  }
}

export default todosReducer