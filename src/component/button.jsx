import React from 'react'
import PropTypes from 'prop-types'

/**
 * Button Component
 *
 *  @type {React.FunctionComponent<{text: string}>} 
 */
export const Button = (props) => {
  return <button>{props.text}</button>
}

Button.propTypes = {
  text: PropTypes.string
}
