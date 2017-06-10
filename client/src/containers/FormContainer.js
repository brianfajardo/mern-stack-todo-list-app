import React, { Component } from 'react'
import { connect } from 'react-redux'

// import * as actions from '../actions'

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
    // inputValue.
    // Action creator -> Server -> Mongo
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

// const mapStateToProps = () => ({})

export default FormContainer
// export default connect(mapStateToProps, actions)(FormContainer)