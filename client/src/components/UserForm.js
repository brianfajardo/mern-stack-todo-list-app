import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const UserForm = ({ inputValue, onInputChange, onFormSubmit }) => (
  <form onSubmit={onFormSubmit}>
    <input
      type="text"
      value={inputValue}
      onChange={onInputChange}
    />
    <Button type={'submit'} text={'add'} />
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