import React from 'react'
import PropTypes from 'prop-types'

const UserForm = ({ inputValue, onInputChange, onFormSubmit }) => (
  <form onSubmit={onFormSubmit}>
    <input
      type="text"
      value={inputValue}
      onChange={onInputChange}
    />
    <button type="submit">Add</button>
  </form>
)

UserForm.propTypes = {
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
}

UserForm.defaultProps = {
  inputValue: ''
}

export default UserForm