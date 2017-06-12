import { ADD_TODO } from '../constants/actionTypes'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload.data]
    default:
      return state
  }
}

export default todosReducer