import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  Form,
  Segment,
  Grid,
  Button,
  Header,
  Divider,
  Message
} from "semantic-ui-react";
import { required } from "../common/utils/validations/FieldLevelValidationForm";

import renderInput from "../common/components/form/InputComponent";
import renderCheckbox from "../common/components/form/CheckBoxComponent";
import renderTextArea from "../common/components/form/TextAreaComponent";

const normalizeDoubleNumber = (value, previousValue) => {
  if (!value) {
    return value;
  }

  return value.match(/^(?!(0))\d{1,4}\.(\d{1,2})?$/g) ||
    value.match(/^(?!(0))^\d{1,4}\.?$/g)
    ? value
    : previousValue;
};

const AddLinkFormComponent = props => {
  const { handleSubmit, reset, formDataStep1 = {}, signupError } = props;

  return (
    <Grid stackable centered>
      <Grid.Column width={11}>
        <Segment>
          <Header as="h1" dividing>
            Link Details
          </Header>
          <Form
            onSubmit={handleSubmit(() =>
              props.publishLink({ history: props.history })
            )}
          >
            <Field
              required
              component={renderInput}
              label="Link Data"
              name="linkData"
              placeholder="Link Data (can be URL or Note)"
              validate={required}
            />
            <Field
              required
              component={renderTextArea}
              label="Link Description"
              name="linkDescription"
              placeholder="Link Description (Includes hashtags for future search)"
              validate={required}
            />
            <Field
              required
              component={renderInput}
              validate={required}
              label="Shared Link ID"
              name="sharedLinkId"
              placeholder="Shared Link Id (the Link ID of the other link that was referenced when recived from other User)"
            />
            <Field
              component={renderCheckbox}
              name="isShared"
              label="Shared Indicator"
            />
            <Divider hidden />
            <Button color="olive" type="submit" fluid>
              Create Link
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};
export default reduxForm({
  form: "addLinkForm"
})(AddLinkFormComponent);
