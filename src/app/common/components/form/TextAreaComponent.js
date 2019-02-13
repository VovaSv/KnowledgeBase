import React from "react";
import { Form, Transition, Label } from "semantic-ui-react";

const renderTextArea = field => (
  <>
    <Form.TextArea
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

export default renderTextArea;
