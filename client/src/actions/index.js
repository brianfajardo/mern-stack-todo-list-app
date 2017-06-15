import axios from 'axios'
import {
  INPUT_VALUE,
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL,
  DELETE_TODO,
  DELETE_COMPLETED
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

export const toggleTodo = todo => (dispatch) => {
  axios.put(`${URL}/update`, { ...todo, completed: !todo.completed })
    .then((res) => {
      const updatedTodo = res.data
      dispatch({ type: TOGGLE_TODO, payload: updatedTodo })
    })
}

export const toggleAll = () => (dispatch) => {
  axios.put(`${URL}/update/all`)
    .then((res) => {
      const updatedTodos = res.data
      dispatch({ type: TOGGLE_ALL, payload: updatedTodos })
    })
}

export const deleteTodo = id => (dispatch) => {
  axios.delete(`${URL}/delete`, { data: { _id: id } })
    .then(dispatch({ type: DELETE_TODO, payload: id }))
}

export const deleteCompleted = () => (dispatch) => {
  axios.delete(`${URL}/delete/completed`)
    .then(dispatch({ type: DELETE_COMPLETED }))
}