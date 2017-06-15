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
        todo={todo}
        deleteTodo={deleteTodo}
      />
    ))
  }

  render() {
    return (
      <div>
        <ul>
          {/* Todos array check. Trying to .map() undefined ~> typeError */}
          {this.props.todos && this.renderListItem()}
        </ul>
        <Button text={'Toggle All'} onClick={() => this.props.toggleAll()} />
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