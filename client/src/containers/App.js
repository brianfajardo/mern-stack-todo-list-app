import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchTodos } from '../actions/'
import Header from '../components/Header'
import FormContainer from './FormContainer'
import ListContainer from './ListContainer'
import { Container } from 'semantic-ui-react'

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const { todos, remainingTodos } = this.props
    return (
      <Container textAlign="center">
        <Header todos={todos} remainingTodos={remainingTodos} />
        <FormContainer />
        <ListContainer />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { todoList: { todos, completedCount } } = state
  const remainingTodos = todos.length - completedCount
  return { todos, remainingTodos }
}

App.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  remainingTodos: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, { fetchTodos })(App)
