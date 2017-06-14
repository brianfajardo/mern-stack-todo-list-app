import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, onClick, text }) => (
  <button type={type} onClick={onClick}>
    {text}
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string
}

Button.defaultProps = {
  type: null,
  onClick: null,
  text: null
}

export default Button