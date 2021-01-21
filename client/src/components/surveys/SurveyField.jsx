import React from 'react';
import { Field } from 'redux-form';
import { TextField, TextareaAutosize } from '@material-ui/core';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && error}
    style={{ width: '100%', margin: '10px 0' }}
    autoComplete="off"
    variant="outlined"
    {...input}
    {...custom}
  />
);

export const SurveyField = ({
  label,
  name,
  multiline,
  rows,
  autoFocus,
  placeholder,
}) => {
  return (
    <Field
      type="text"
      label={label}
      name={name}
      component={renderTextField}
      multiline={multiline}
      rows={rows}
      autoFocus={autoFocus}
      placeholder={placeholder}
    />
  );
};
