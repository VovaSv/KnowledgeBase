import { connect } from "react-redux";
import AddLinkMainComponent from "./AddLinkMainComponent";
import { submit, reset } from "redux-form";
import { linkManageOperations } from "../../apis/link-manage-duck-api";

const mapStateToProps = state => {
  let addLinkFormData = state.form.addLinkForm
    ? state.form.addLinkForm.values
    : "";

  console.log("addLinkFormData: ", addLinkFormData);
  return state.form.addLinkForm
    ? {
        addLinkFormData,
        userId: state.firebase.auth.uid,
        initials: state.firebase.profile.initials,
        firstName: state.firebase.profile.firstName
        //submitWishShowSpinner: state.submitWish.submitWishShowSpinner,
        //submitWishSucced: state.submitWish.submitWishSucced
      }
    : {};
};

const mapDispatchToProps = dispatch => {
  // 'fetchSubredditJson()' will trigger fetching of JSON data from
  // the Reddit API and pushes the relevant data into the Redux store.

  const publishLink = addLinkData => {
    console.log("AddLinkContainerContainer-> addLinkData: ", addLinkData);
    dispatch(linkManageOperations.addLinkOperation(addLinkData));
  };

  return {
    publishLink
  };
};

const AddLinkMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLinkMainComponent);

export default AddLinkMainContainer;
