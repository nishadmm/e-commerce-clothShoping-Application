import React from "react";

import SignIn from "./SignIn";
import SignUp from "./signUp/SignUp";
import "./SignInUp.style.scss";

const SignInUp = () => {
  return (
    <div className="sign-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
