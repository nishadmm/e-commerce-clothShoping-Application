import React from "react";
import { CustomButtonContainer } from "./CustomButton.style";

// import "./CustomButton.style.scss";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
