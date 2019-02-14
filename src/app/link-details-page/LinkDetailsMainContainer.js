import { connect } from "react-redux";
import LinkDetailsMainComponent from "./LinkDetailsMainComponent";
import { submit, reset } from "redux-form";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const mapStateToProps = (state, ownProps) => {
  const linkId = ownProps.match.params.id;
  return {
    linkDetails: state.firestore.data.links
      ? state.firestore.data.links[linkId]
      : null
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const LinkDetailsMainContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => {
    return [{ collection: "links" }];
  })
)(LinkDetailsMainComponent);

export default LinkDetailsMainContainer;
