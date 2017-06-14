import {
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from '../constants/actionTypes'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return [...state, ...action.payload.data]
    case ADD_TODO:
      return [...state, action.payload.data]
    case TOGGLE_TODO:
      console.log('TOGGLE TODO REDUCER:', action.payload)
      break
    case DELETE_TODO:
      return state.filter(todo => todo._id !== action.payload)
    default:
      return state
  }
}

export default todosReducer