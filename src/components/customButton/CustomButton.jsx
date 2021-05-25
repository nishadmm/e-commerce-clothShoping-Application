import React from 'react'

import './CustomButton.style.scss'

const CustomButton = ({children, googleSignInBtn, ...otherProps}) => {
  return (
    <button {...otherProps} className={` ${googleSignInBtn && 'google-signin-btn' } custom-button`}  >
      {children}
    </button>
  )
}

export default CustomButton
