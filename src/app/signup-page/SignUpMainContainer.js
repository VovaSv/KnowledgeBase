import { connect } from "react-redux";
import SignUpMainComponent from "./SignUpMainComponent";
import { authOperations } from "../../apis/auth-duck-api";

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    signupShowSpinner: state.auth.signupShowSpinner,
    signupError: state.auth.signupError || ""
  };
};

const mapDispatchToProps = dispatch => {
  const signupOperation = signupPayload => {
    console.log("signupContiner-> signupPayload: ", signupPayload);
    //dispatch(submitWishOperations.submitWishOperation(loginFormData));
    dispatch(authOperations.signupOperation(signupPayload));
  };

  return {
    signupOperation
  };
};

const SignUpMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpMainComponent);

export default SignUpMainContainer;
