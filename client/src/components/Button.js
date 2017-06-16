import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { type, text, onClick } = props
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  )
}

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