import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import UserForm from '../components/UserForm'

class FormContainer extends Component {

  constructor() {
    super()
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(e) {
    this.props.setInputText(e.target.value)
  }

  onFormSubmit(e) {
    e.preventDefault()
    if (this.props.inputValue.length > 0) {
      this.props.addTodo(this.props.inputValue)
    }
  }

  render() {
    return (
      <UserForm
        inputValue={this.props.inputValue}
        onInputChange={this.onInputChange}
        onFormSubmit={this.onFormSubmit}
      />
    )
  }
}

const mapStateToProps = state => ({
  inputValue: state.todoList.inputValue
})

FormContainer.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(FormContainer)