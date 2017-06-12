import axios from 'axios'
import { ADD_TODO, FETCH_TODOS } from '../constants/actionTypes'

const URL = 'http://localhost:8000/todos'

export const fetchTodos = () => {
  const request = axios.get(URL)
  return { type: FETCH_TODOS, payload: request }
}

export const addTodo = (todo) => {
  const request = axios.post(`${URL}/create`, { todo })
  return { type: ADD_TODO, payload: request }
}