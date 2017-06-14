import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const ListItem = ({ todo, onButtonRemove, onTodoClick }) => (
  <li
    onClick={() => onTodoClick(todo)}
    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
  >
    {todo.todo}
    <Button text={'x'} onClick={() => onButtonRemove(todo._id)} />
  </li >
)

ListItem.propTypes = {
  // todo: PropTypes.shape({
  //   todo: PropTypes.string.isRequired,
  //   completed: PropTypes.bool.isRequired,
  //   _id: PropTypes.string.isRequired
  // }).isRequired,
  onButtonRemove: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default ListItem