import React from 'react'
import PropTypes from 'prop-types'

const List = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo._id}>{todo.todo}</li>
    ))}
  </ul>
)

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired
}

export default List