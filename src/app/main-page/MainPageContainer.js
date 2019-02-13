import { connect } from "react-redux";
import MainPageComponent from "./MainPageComponent";
import { submit, reset } from "redux-form";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const mapStateToProps = state => {
  return {
    links: state.firestore ? state.firestore.ordered.links : []
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const MainPageContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    { collection: "links", orderBy: [["createdDate", "desc"]] }
  ])
)(MainPageComponent);

export default MainPageContainer;
