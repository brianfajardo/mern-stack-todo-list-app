import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import UserForm from '../components/UserForm'

class FormContainer extends Component {

  constructor() {
    super()
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(e) {
    const { inputValue, addTodo } = this.props
    e.preventDefault()
    // Prevent empty input spam
    if (inputValue.length > 0) {
      addTodo(this.props.inputValue)
    }
  }

  render() {
    const { inputValue, setInputText } = this.props
    return (
      <UserForm
        inputValue={inputValue}
        setInputText={setInputText}
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