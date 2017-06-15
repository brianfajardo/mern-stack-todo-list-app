import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import ListItem from './ListItem'

class List extends Component {

  renderListItem() {
    const { todos, toggleTodo, deleteTodo } = this.props
    return todos.map(todo => (
      <ListItem
        key={todo._id}
        individualTodo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ))
  }

  render() {
    const {
      todos,
      toggleAll,
      deleteCompleted
    } = this.props
    return (
      <div>
        <ul>
          {/* Todos array check. Trying to .map() undefined ~> typeError */}
          {todos && this.renderListItem()}
        </ul>
        {todos.length > 0 && <Button text={'Toggle All'} onClick={toggleAll} />}
        <Button text={'Clear Completed'} onClick={deleteCompleted} />
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
  deleteCompleted: PropTypes.func.isRequired
}

export default List