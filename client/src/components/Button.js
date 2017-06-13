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
  children: PropTypes.string
}

Button.defaultProps = {
  type: null,
  onClick: null,
  children: null
}

export default Button