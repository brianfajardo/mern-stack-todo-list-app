import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const UserForm = (props) => {
  const {
    inputValue,
    onFormSubmit,
    setInputText
  } = props
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputText(e.target.value)}
      />
      <Button type={'submit'} text={'add'} />
    </form>
  )
}

UserForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
}

export default UserForm