import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../actions/'
import List from '../components/List'

class ListContainer extends Component {

  render() {
    console.log('ListContainer todos --->', this.props.todos)
    return (
      <List
        todos={this.props.todos}
        deleteTodo={this.props.deleteTodo}
        toggleAll={this.props.toggleAll}
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