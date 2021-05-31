import React from "react";

import "./CustomButton.style.scss";

const CustomButton = ({
  children,
  inverted,
  googleSignInBtn,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={` ${googleSignInBtn && "google-signin-btn"} ${
        inverted && "invert"
      } custom-button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
