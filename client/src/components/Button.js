import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, onClick, children }) => (
  <button type={type} onClick={onClick}>
    {children}
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