import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const UserForm = ({ inputValue, setInputText, onFormSubmit }) => (
  <form onSubmit={onFormSubmit}>
    <input
      type="text"
      value={inputValue}
      onChange={e => setInputText(e.target.value)}
    />
    <Button type={'submit'} text={'add'} />
  </form>
)

UserForm.propTypes = {
  inputValue: PropTypes.string,
  setInputText: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
}

UserForm.defaultProps = {
  inputValue: ''
}

export default UserForm