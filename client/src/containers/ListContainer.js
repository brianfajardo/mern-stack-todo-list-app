import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ListContainer extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li key={todo._id}>{todo.todo}</li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

ListContainer.propTypes = {
  todos: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(ListContainer)