import React from 'react'
import PropTypes from 'prop-types'
import { List, Button, Divider } from 'semantic-ui-react'

// import Button from './Button'

const ListItem = (props) => {
  const { todoObj, todoObj: { todo, completed }, toggleTodo, deleteTodo } = props
  return (
    <List.Item
      onDoubleClick={() => toggleTodo(todoObj)}
      style={{ textDecoration: completed ? 'line-through' : 'none', cursor: 'pointer' }}
    >
      <div>
        {todo}
        <Button
          inverted
          size="mini"
          color="red"
          onClick={() => deleteTodo(todoObj)}
          style={{ float: 'right' }}
        >
          X
        </Button>
      </div>
      <Divider />
    </List.Item>
  )
}

ListItem.propTypes = {
  todoObj: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default ListItem
