import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
  addLinkRequest: ["addLinkRequest"],
  addLinkSuccess: ["addLinkSuccess"],
  addLinkFailure: ["addLinkFailure"]
});

export { Creators, Types };
