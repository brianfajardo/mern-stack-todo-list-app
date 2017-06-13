import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const ListItem = ({ todo, onClickRemove }) => (
  <li>
    {todo.todo}
    <Button text={'x'} onClick={() => onClickRemove(todo._id)} />
  </li >
)

ListItem.propTypes = {
  todo: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired,
  onClickRemove: PropTypes.func.isRequired
}

export default ListItem