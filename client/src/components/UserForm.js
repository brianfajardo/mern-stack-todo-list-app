import React from 'react'
import PropTypes from 'prop-types'

// import Button from './Button'
import { Input, Button } from 'semantic-ui-react'

const UserForm = (props) => {
  const { inputValue, onFormSubmit, setInputText } = props
  return (
    <form onSubmit={onFormSubmit} style={{ marginTop: 25, marginBottom: 25 }}>
      <Input
        type="text"
        value={inputValue}
        onChange={e => setInputText(e.target.value)}
        placeholder="Enter something to do"
      />
      <Button color="green">Submit</Button>
    </form>
  )
}

UserForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
}

export default UserForm
