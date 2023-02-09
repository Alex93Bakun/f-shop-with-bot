import React from 'react'

const Button = (props) => {
  return (
    <button {...props} className={'botton ' + props.className}></button>
  )
}

export default Button