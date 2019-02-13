import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./apis/auth-duck-api";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  form: formReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer
});

export default rootReducer;
