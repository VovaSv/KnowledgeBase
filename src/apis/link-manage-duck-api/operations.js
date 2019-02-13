// operations.js
import { Creators } from "./actions";
const addLinkRequest = Creators.addLinkRequest;
const addLinkSuccess = Creators.addLinkSuccess;
const addLinkFailure = Creators.addLinkFailure;

//const addLinkDataClear = Creators.addLinkDataClear;

const addLinkOperation = addLinkData => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    console.log("addLinkOperation ");
    dispatch(addLinkRequest());
    const firestore = getFirestore();
    const createdDate = new Date();
    const history = addLinkData.history;
    const addLinkFormData = getState().form.addLinkForm.values;
    const userId = getState().firebase.auth.uid;
    console.log("addLinkFormData ", addLinkFormData);
    delete addLinkData.history;
    firestore
      .collection("links")
      .add({
        ...addLinkData,
        ...addLinkFormData,
        createdDate,
        userId
      })
      .then(addLinkResponse => {
        dispatch(addLinkSuccess(addLinkResponse));
        history.push("/app");
      })
      .catch(addLinkError => {
        dispatch(addLinkFailure(addLinkError));
      });
  };
};

const clearAddLinkDataOperation = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    //dispatch(addLinkDataClear());
  };
};

export default {
  addLinkOperation,
  clearAddLinkDataOperation
};
