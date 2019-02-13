import types from "./types";

const INITIAL_STATE = {};
const submitWishReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_LINK_REQUEST: {
      return {
        ...state,
        addLinkShowSpinner: true
      };
    }

    case types.ADD_LINK_SUCCESS: {
      const { submitWishResponse } = action;
      console.log("add-link-reducer: ", submitWishResponse);
      return {
        ...state,
        addLinkSucced: true,
        addLinkShowSpinner: false
      };
    }

    case types.ADD_LINK_FAILURE: {
      return {
        ...state,
        addLinkShowSpinner: false,
        addLinkSucced: false
      };
    }

    default:
      return state;
  }
};

export default submitWishReducer;
