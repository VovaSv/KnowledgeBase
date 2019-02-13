import types from "./types";

const INITIAL_STATE = { loginSuccess: false, loginError: null };
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        showSpinner: true
      };
    }

    case types.LOGIN_SUCCESS: {
      const { loginResponse } = action;
      console.log("LOGIN_SUCCESS: ", loginResponse);
      return {
        ...state,
        loginSuccess: true,
        showSpinner: false
      };
    }

    case types.LOGIN_FAILURE: {
      return {
        ...state,
        showSpinner: false,
        loginError: true
      };
    }

    case types.CLEAN_LOGIN_ERROR: {
      return {
        ...state,
        loginError: false
      };
    }

    case types.SIGNUP_REQUEST: {
      return {
        ...state,
        signupShowSpinner: true,
        signupError: null
      };
    }

    case types.SIGNUP_SUCCESS: {
      const { signupResponse } = action;
      console.log("SIGNUP_SUCCESS: ", signupResponse);
      return {
        ...state,
        signupSuccess: true,
        signupShowSpinner: false
      };
    }

    case types.SIGNUP_FAILURE: {
      const { signupError } = action;
      return {
        ...state,
        signupShowSpinner: false,
        signupError: signupError
      };
    }

    case types.SIGNOUT_REQUEST: {
      return {
        ...state,
        signupShowSpinner: true
      };
    }

    case types.SIGNOUT_SUCCESS: {
      const { signupResponse } = action;
      console.log("SIGNOUT_SUCCESS: ", signupResponse);
      return {
        ...state,
        signupSuccess: true,
        signupShowSpinner: false
      };
    }

    case types.SIGNOUT_FAILURE: {
      return {
        ...state,
        signupShowSpinner: false,
        signupError: "SIGNOUT_FAILURE"
      };
    }

    default:
      return state;
  }
};

export default authReducer;