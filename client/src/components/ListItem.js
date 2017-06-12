import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const ListItem = ({ todo }) => (
  <li>
    {todo.todo}
    <Button>x</Button>
  </li>
)

ListItem.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired
}

export default ListItem