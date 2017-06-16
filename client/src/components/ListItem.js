import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const ListItem = (props) => {
  const {
    todoObj,
    todoObj: { todo, completed },
    toggleTodo,
    deleteTodo
   } = props
  return (
    <li
      onDoubleClick={() => toggleTodo(todoObj)}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {todo}
      <Button text={'x'} onClick={() => deleteTodo(todoObj)} />
    </li >
  )
}

ListItem.propTypes = {
  todoObj: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default ListItem