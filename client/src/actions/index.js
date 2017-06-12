import axios from 'axios'
import { ADD_TODO } from '../constants/actionTypes'

const URL = 'http://localhost:8000/todos'

export const addTodo = (todo) => {
  const request = axios.post(`${URL}/create`, { todo })
  return { type: ADD_TODO, payload: request }
}