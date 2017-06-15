import axios from 'axios'
import {
  ADD_TODO,
  FETCH_TODOS,
  INPUT_VALUE,
  DELETE_TODO,
  TOGGLE_ONE,
  TOGGLE_ALL
} from '../constants/actionTypes'

const URL = 'http://localhost:8000/todos'

export const setInputText = text => ({ type: INPUT_VALUE, payload: text })

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
      const newTodo = res.data
      dispatch({ type: ADD_TODO, payload: newTodo })
    })
}

export const toggleAll = () => (dispatch) => {
  axios.put(`${URL}/update/toggleall`)
    .then((res) => {
      const updatedTodos = res.data
      dispatch({ type: TOGGLE_ALL, payload: updatedTodos })
    })
}

export const deleteTodo = id => (dispatch) => {
  axios.delete(`${URL}/delete`, { data: { _id: id } })
    .then(dispatch({ type: DELETE_TODO, payload: id }))
}