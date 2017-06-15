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
    return (
      <div>
        <Header />
        <FormContainer />
        <ListContainer />
      </div>
    )
  }
}

App.propTypes = {
  fetchTodos: PropTypes.func.isRequired
}

export default connect(null, { fetchTodos })(App)