import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions/'

import List from '../components/List'

class ListContainer extends Component {

  constructor() {
    super()
    this.onTodoClick = this.onTodoClick.bind(this)
    this.onButtonRemove = this.onButtonRemove.bind(this)
  }

  onTodoClick(todo) {
    this.props.toggleTodo(todo)
  }

  onButtonRemove(id) {
    this.props.deleteTodo(id)
  }

  render() {
    console.log('ListContainer todos:', this.props.todos)
    return (
      <List
        todos={this.props.todos}
        onTodoClick={this.onTodoClick}
        onButtonRemove={this.onButtonRemove}
      />
    )
  }
}

const mapStateToProps = ({ todos }) => ({ todos })

ListContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(ListContainer)