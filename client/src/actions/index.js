import axios from 'axios'
import {
  INPUT_VALUE,
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL,
  DELETE_TODO,
  DELETE_COMPLETED,
  COMPLETED_COUNT,
  INCREMENT_COMPLETED_COUNT,
  DECREMENT_COMPLETED_COUNT
} from '../constants/actionTypes'

// const DEV_URL = 'http://localhost:8000/todos'
const PROD_URL = 'https://mernstack-todos.herokuapp.com/todos'

export const setInputText = text => ({ type: INPUT_VALUE, payload: text })

export const fetchTodos = () => (dispatch) => {
  axios.get(PROD_URL)
    .then((res) => {
      const todos = res.data
      const completedCount = todos.filter(todo => todo.completed).length
      dispatch({ type: COMPLETED_COUNT, payload: completedCount })
      dispatch({ type: FETCH_TODOS, payload: todos })
    })
}

export const addTodo = todo => (dispatch) => {
  axios.post(`${PROD_URL}/create`, { todo })
    .then((res) => {
      const newTodo = res.data
      dispatch({ type: ADD_TODO, payload: newTodo })
    })
}

export const toggleTodo = todo => (dispatch) => {
  axios.put(`${PROD_URL}/update`, { ...todo, completed: !todo.completed })
    .then((res) => {
      const updatedTodo = res.data
      dispatch({ type: TOGGLE_TODO, payload: updatedTodo })
      dispatch({
        type:
        (updatedTodo.completed ? DECREMENT_COMPLETED_COUNT : INCREMENT_COMPLETED_COUNT)
      })
    })
}

export const toggleAll = () => (dispatch) => {
  axios.put(`${PROD_URL}/update/all`)
    .then((res) => {
      const updatedTodos = res.data
      const completedCount = updatedTodos.filter(todo => todo.completed).length
      dispatch({ type: TOGGLE_ALL, payload: updatedTodos })
      dispatch({ type: COMPLETED_COUNT, payload: completedCount })
    })
}

export const deleteTodo = todo => (dispatch) => {
  const { _id, completed } = todo
  axios.delete(`${PROD_URL}/delete`, { data: { _id } })
    .then(() => {
      dispatch({ type: DELETE_TODO, payload: _id })
      // If deleted todo was completed (=== true), decrease completed count
      if (completed) { dispatch({ type: DECREMENT_COMPLETED_COUNT }) }
    })
}

export const deleteCompleted = () => (dispatch) => {
  axios.delete(`${PROD_URL}/delete/completed`)
    .then(() => {
      dispatch({ type: DELETE_COMPLETED })
      dispatch({ type: COMPLETED_COUNT, payload: 0 })
    })
}