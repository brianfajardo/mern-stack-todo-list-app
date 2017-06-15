import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import ListItem from './ListItem'

class List extends Component {

  renderListItem() {
    const { todos, deleteTodo } = this.props
    return todos.map(todo => (
      <ListItem
        key={todo._id}
        individualTodo={todo}
        deleteTodo={deleteTodo}
      />
    ))
  }

  render() {
    const { todos, toggleAll } = this.props
    return (
      <div>
        <ul>
          {/* Todos array check. Trying to .map() undefined ~> typeError */}
          {todos && this.renderListItem()}
        </ul>
        <Button text={'Toggle All'} onClick={toggleAll} />
        <Button text={'Clear Completed'} />
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
  deleteTodo: PropTypes.func.isRequired,
  toggleAll: PropTypes.func.isRequired
}

export default List