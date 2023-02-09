import React from 'react'

const Button = (props) => {
  return (
    <button {...props} className={'botton ' + props.className}>Button</button>
  )
}

export default Button