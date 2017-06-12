import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import List from '../components/List'

class ListContainer extends Component {

  render() {
    return <List todos={this.props.todos} />
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
  })).isRequired
}

export default connect(mapStateToProps)(ListContainer)