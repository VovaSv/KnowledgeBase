import React, { Component } from "react";
import AddLinkFormComponent from "./AddLinkFormComponent";

export default class AddLinkMainComponent extends Component {
  state = {
    showStep1: true,
    showStep2: false,
    showStep3: false,
    currentStep: 1
  };

  showStep2 = e => {
    this.setState({});
  };

  updateStep = step => {
    this.setState({
      step
    });
  };
  render() {
    const addLinkFormData = this.props.addLinkFormData;
    return (
      <>
        <AddLinkFormComponent
          onSubmit={this.showStep2}
          formDataStep1={addLinkFormData}
          history={this.props.history}
          publishLink={this.props.publishLink}
        />
      </>
    );
  }
}
