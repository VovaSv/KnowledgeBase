import React from "react";
import { Redirect } from "react-router-dom";
import SignUpFormComponent from "./SignUpFormComponent";

const onSubmitLogin = () => {};

const Signup = props => {
  return props.auth.uid ? (
    <Redirect to="/app" />
  ) : (
    <SignUpFormComponent
      signupOperation={props.signupOperation}
      onSubmit={onSubmitLogin}
      signupShowSpinner={props.signupShowSpinner}
      signupError={props.signupError}
    />
  );
};

export default Signup;
