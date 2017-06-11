import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ListContainer extends Component {
  render() {
    const { todos } = this.props
    console.log(todos)
    return (
      <div>hey</div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

ListContainer.propTypes = {
  todos: PropTypes.object
}

export default connect(mapStateToProps)(ListContainer)