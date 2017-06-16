import axios from 'axios'
import {
  URL,
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

export const setInputText = text => ({ type: INPUT_VALUE, payload: text })

export const fetchTodos = () => (dispatch) => {
  axios.get(URL)
    .then((res) => {
      const todos = res.data
      const completedCount = todos.filter(todo => todo.completed).length
      dispatch({ type: FETCH_TODOS, payload: todos })
      dispatch({ type: COMPLETED_COUNT, payload: completedCount })
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
      dispatch({ type:
        (updatedTodo.completed ? DECREMENT_COMPLETED_COUNT : INCREMENT_COMPLETED_COUNT)
      })
    })
}

export const toggleAll = () => (dispatch) => {
  axios.put(`${URL}/update/all`)
    .then((res) => {
      const updatedTodos = res.data
      const completedCount = updatedTodos.filter(todo => todo.completed).length
      dispatch({ type: TOGGLE_ALL, payload: updatedTodos })
      dispatch({ type: COMPLETED_COUNT, payload: completedCount })
    })
}

export const deleteTodo = todo => (dispatch) => {
  const { _id, completed } = todo
  axios.delete(`${URL}/delete`, { data: { _id } })
    .then(() => {
      dispatch({ type: DELETE_TODO, payload: _id })
      if (completed) { dispatch({ type: DECREMENT_COMPLETED_COUNT }) }
    })
}

export const deleteCompleted = () => (dispatch) => {
  axios.delete(`${URL}/delete/completed`)
    .then(() => {
      dispatch({ type: DELETE_COMPLETED })
      dispatch({ type: COMPLETED_COUNT, payload: 0 })
    })
}