import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../actions/'
import List from '../components/List'

class ListContainer extends Component {

  render() {
    const { todos, deleteTodo, toggleAll } = this.props
    return (
      <List
        todos={todos}
        deleteTodo={deleteTodo}
        toggleAll={toggleAll}
      />
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todoList.todos
})

ListContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleAll: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(ListContainer)