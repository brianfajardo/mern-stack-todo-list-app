import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import ListItem from './ListItem'

class List extends Component {

  renderListItem() {
    const {
      todos,
      toggleTodo,
      deleteTodo
     } = this.props
    return todos.map(todo => (
      <ListItem
        key={todo._id}
        todoObj={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ))
  }

  render() {
    const {
      todos,
      toggleAll,
      deleteCompleted,
      completedCount
    } = this.props
    return (
      <div>
        <ul>
          {todos && this.renderListItem()}
        </ul>
        {todos.length > 0 && <Button text={'Toggle All'} onClick={toggleAll} />}
        {completedCount > 0 && <Button text={'Clear Completed'} onClick={deleteCompleted} />}
      </div>
    )
  }
}

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  toggleAll: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  deleteCompleted: PropTypes.func.isRequired,
  completedCount: PropTypes.number.isRequired
}

export default List