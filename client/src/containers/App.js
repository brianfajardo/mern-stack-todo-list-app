import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchTodos } from '../actions/'
import Header from '../components/Header'
import FormContainer from './FormContainer'
import ListContainer from './ListContainer'

class App extends Component {

  componentWillMount() {
    this.props.fetchTodos()
  }

  render() {
    const { todos, remainingTodos } = this.props
    return (
      <div>
        <Header todos={todos} remainingTodos={remainingTodos} />
        <FormContainer />
        <ListContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { todoList: { todos, completedCount } } = state
  const remainingTodos = (todos.length - completedCount)
  return { todos, remainingTodos }
}

App.propTypes = {
  fetchTodos: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { fetchTodos })(App)