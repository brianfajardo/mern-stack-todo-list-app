import axios from 'axios'
import {
  ADD_TODO,
  FETCH_TODOS,
  DELETE_TODO,
  TOGGLE_TODO
} from '../constants/actionTypes'

const URL = 'http://localhost:8000/todos'

export const fetchTodos = () => (dispatch) => {
  axios.get(URL)
    .then((res) => {
      const todos = res.data
      dispatch({ type: FETCH_TODOS, payload: todos })
    })
}

export const addTodo = todo => (dispatch) => {
  axios.post(`${URL}/create`, { todo })
    .then((res) => {
      const todo = res.data
      // dispatch({ type: ADD_TODO, payload: todo })
      console.log('adding todo')
    })
}

export const toggleTodo = ({ _id, todo, completed }) => {
  axios.put(`${URL}/update`, { _id, todo, completed: !completed })
  return { type: TOGGLE_TODO, payload: _id }
}

export const deleteTodo = (id) => {
  axios.delete(`${URL}/delete`, { data: { _id: id } })
  return { type: DELETE_TODO, payload: id }
}