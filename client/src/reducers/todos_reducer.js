import { ADD_TODO, FETCH_TODOS } from '../constants/actionTypes'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return [...state, ...action.payload.data]
    case ADD_TODO:
      return [...state, action.payload.data]
    default:
      return state
  }
}

export default todosReducer