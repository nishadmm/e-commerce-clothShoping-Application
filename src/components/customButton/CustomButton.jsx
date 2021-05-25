import React from 'react'

import './CustomButton.style.scss'

const CustomButton = ({children, ...otherProps}) => {
  return (
    <button {...otherProps} className="custom-button"  >
      {children}
    </button>
  )
}

export default CustomButton
