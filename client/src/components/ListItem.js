import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const ListItem = ({ individualTodo, toggleTodo, deleteTodo }) => {
  const { _id, todo, completed } = individualTodo
  return (
    <li
      onClick={() => toggleTodo(individualTodo)}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {todo}
      <Button text={'x'} onClick={() => deleteTodo(_id)} />
    </li >
  )
}

ListItem.propTypes = {
  individualTodo: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default ListItem