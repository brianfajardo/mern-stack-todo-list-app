import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import ListItem from './ListItem'

class List extends Component {

  renderListItem() {
    const { todos, onButtonRemove, onTodoClick } = this.props
    return todos.map(todo => (
      <ListItem
        key={todo._id}
        todo={todo}
        onTodoClick={onTodoClick}
        onButtonRemove={onButtonRemove}
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
        <Button text={'Toggle All'} />
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
  onButtonRemove: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default List