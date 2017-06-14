import axios from 'axios'
import {
  INPUT_VALUE,
  ADD_TODO,
  FETCH_TODOS
} from '../constants/actionTypes'

const URL = 'http://localhost:8000/todos'

export const setInputText = text => (dispatch) => {
  dispatch({ type: INPUT_VALUE, payload: text })
}

export const fetchTodos = () => (dispatch) => {
  axios.get(URL)
    .then((res) => {
      const todos = res.data
      dispatch({ type: FETCH_TODOS, payload: todos })
    })
}

export const addTodo = todo => (dispatch) => {
  axios.post(`${URL}/create`, { todo })
    .then(() => dispatch({ type: ADD_TODO }))
}

export const toggleTodo = ({ _id, todo, completed }) => {
  axios.put(`${URL}/update`, { _id, todo, completed: !completed })
}

export const deleteTodo = (id) => {
  axios.delete(`${URL}/delete`, { data: { _id: id } })
}