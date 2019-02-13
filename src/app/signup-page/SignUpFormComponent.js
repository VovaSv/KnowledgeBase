import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

import { Field, reduxForm } from "redux-form";

import renderInput from "../common/components/form/InputComponent";
import { required } from "../common/utils/validations/FieldLevelValidationForm";

const SignupForm = props => {
  const {
    handleSubmit,
    signupOperation,
    signupError: { message: errorMessage }
  } = props;
  return (
    <div className="signup-form">
      {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.signup-form {
        height: 100%;
      }
    `}</style>
      <Grid centered style={{ height: "100%" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="olive" textAlign="center">
            Sign up
          </Header>
          <Form size="large" onSubmit={handleSubmit(signupOperation)}>
            <Segment stacked>
              <Field
                label="First Name"
                component={renderInput}
                name="firstName"
                icon="user"
                iconPosition="left"
                placeholder="First Name"
                fluid
                validate={required}
              />
              <Field
                label="Last Name"
                component={renderInput}
                name="lastName"
                placeholder="Last Name"
                fluid
                validate={required}
              />
              <Field
                label="Nick Name"
                component={renderInput}
                name="nickName"
                icon="user"
                iconPosition="left"
                placeholder="Nick Name"
                fluid
                validate={required}
              />
              <Field
                label="E-mail"
                component={renderInput}
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                validate={required}
              />
              <Field
                label="Password"
                component={renderInput}
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                validate={required}
              />
              {errorMessage ? (
                <Message negative>
                  <Message.Header>SignUp Error!</Message.Header>
                  <p>{errorMessage}</p>
                </Message>
              ) : null}
              <Button
                color="olive"
                fluid
                size="large"
                loading={props.signupShowSpinner}
              >
                Sign up
              </Button>
            </Segment>
          </Form>
          {/*<Message>
            Already have an account? <a href="#" color="olive">Log in</a>
          </Message>*/}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default reduxForm({
  form: "signupForm"
})(SignupForm);
