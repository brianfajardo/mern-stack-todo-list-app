import React, { Component } from 'react'

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

  onFormSubmit() {
    this.props.addTodo(this.state.inputValue)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default FormContainer