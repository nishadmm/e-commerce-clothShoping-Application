import React from "react";

import SignIn from "./SignIn";
import "./SignInUp.style.scss";
import SignUp from "./signUp/SignUp";

const SignInUp = () => {
  return (
    <div className="sign-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
