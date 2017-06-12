import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import ListItem from './ListItem'

const List = ({ todos }) => (
  <div>
    <ul>
      {todos.map(todo => <ListItem key={todo._id} todo={todo} />)}
    </ul>
    <Button>Toggle All</Button>
    <Button>Clear Completed</Button>
  </div>
)

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired
}

export default List