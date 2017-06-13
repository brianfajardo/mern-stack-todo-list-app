import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo } from '../actions'

import UserForm from '../components/UserForm'

class FormContainer extends Component {

  constructor() {
    super()
    this.state = { inputValue: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  onFormSubmit(e) {
    e.preventDefault()
    if (this.state.inputValue.length > 0) {
      this.props.addTodo(this.state.inputValue)
      this.setState({ inputValue: '' })
    }
  }

  render() {
    return (
      <UserForm
        inputValue={this.state.inputValue}
        onInputChange={this.onInputChange}
        onFormSubmit={this.onFormSubmit}
      />
    )
  }
}

FormContainer.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default connect(null, { addTodo })(FormContainer)