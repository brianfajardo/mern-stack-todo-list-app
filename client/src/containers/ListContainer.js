import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions/'

import List from '../components/List'

class ListContainer extends Component {

  constructor() {
    super()
    this.onClickRemove = this.onClickRemove.bind(this)
  }

  onClickRemove(id) {
    this.props.deleteTodo(id)
  }

  render() {
    return (
      <List
        todos={this.props.todos}
        onClickRemove={this.onClickRemove}
      />
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

ListContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(ListContainer)