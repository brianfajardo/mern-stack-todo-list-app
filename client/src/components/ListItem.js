import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const ListItem = ({ todo, deleteTodo }) => (
  <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
    {todo.todo}
    <Button text={'x'} onClick={() => deleteTodo(todo._id)} />
  </li >
)

ListItem.propTypes = {
  todo: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default ListItem