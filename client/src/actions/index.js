import axios from 'axios'
import { ADD_TODO } from '../constants/actionTypes'

const URL = 'http://localhost:8000/todos'

export const addTodo = (todo) => {
  axios.post(`${URL}/create`, { todo })
    .then(savedTodo => ({ type: ADD_TODO, payload: savedTodo }))
}