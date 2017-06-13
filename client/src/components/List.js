import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import ListItem from './ListItem'

const List = ({ todos, onClickRemove }) => (
  <div>
    <ul>
      {todos.map(todo => <ListItem key={todo._id} todo={todo} onClickRemove={onClickRemove} />)}
    </ul>
    <Button text={'Toggle All'} />
    <Button text={'Clear Completed'} />
  </div>
)

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired,
  onClickRemove: PropTypes.func.isRequired
}

export default List