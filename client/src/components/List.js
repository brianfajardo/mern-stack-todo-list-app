import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import Button from './Button'
import { Button, List } from 'semantic-ui-react'
import ListItem from './ListItem'

class ListComponent extends Component {
  renderListItem() {
    const { todos, toggleTodo, deleteTodo } = this.props
    return todos.map(todo => (
      <ListItem key={todo._id} todoObj={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    ))
  }

  render() {
    const { todos, toggleAll, deleteCompleted, completedCount } = this.props
    return (
      <div>
        <List ordered style={listStyle}>
          {todos && this.renderListItem()}
        </List>
        {todos.length > 0 && (
          <Button color="blue" onClick={toggleAll}>
            Toggle All
          </Button>
        )}
        {completedCount > 0 && (
          <Button color="red" onClick={deleteCompleted}>
            Clear Completed
          </Button>
        )}
      </div>
    )
  }
}

const listStyle = {
  width: '80%',
  margin: '0 auto',
  textAlign: 'left',
  marginBottom: 30,
  fontSize: 16.5,
}

ListComponent.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todo: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  toggleAll: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  deleteCompleted: PropTypes.func.isRequired,
  completedCount: PropTypes.number.isRequired,
}

export default ListComponent
