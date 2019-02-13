import React from "react";
import { Form, Transition, Label } from "semantic-ui-react";

const renderInput = field => (
  <>
    <Form.Input
      {...field.input}
      label={field.label}
      placeholder={
        field.meta.touched && field.meta.error
          ? "Please fill mandatory field"
          : field.placeholder
      }
      error={field.meta.touched && field.meta.error ? true : false}
      required={field.required}
    />
  </>
);

export default renderInput;
