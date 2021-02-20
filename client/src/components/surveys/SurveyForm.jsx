import React from 'react';
import { Card, Button, CardActions, TextField } from '@material-ui/core';
import { Field, Form, reduxForm } from 'redux-form';
import validateEmails from '../../utils/validateEmails';
import { useHistory } from 'react-router-dom';

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

const SurveyForm = props => {
  const history = useHistory();
  return (
    <Card
      style={{
        position: 'relative',
        top: '10%',
        padding: '20px',
        textAlign: 'center',
        marginBottom: '200px',
      }}
    >
      <Form onSubmit={props.handleSubmit(props.onNext)}>
        <Field
          type="text"
          label="Survey Title"
          name="title"
          // autoFocus={true}
          component={renderTextField}
        />
        <Field
          type="text"
          label="Subject"
          name="subject"
          component={renderTextField}
        />
        <Field
          label="Recipients"
          type="text"
          name="recipients"
          multiline={true}
          rows={5}
          component={renderTextField}
          placeholder="dev@askio.com, pulavarthi.preetham@askio.com, hello@askio.dev (comma separated entries and no trailing commas)"
        />
        <Field
          type="text"
          label="Mailbody"
          name="body"
          rows={10}
          multiline={true}
          component={renderTextField}
        />

        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => props.reset()}
            style={{ marginRight: 10 }}
          >
            Clear
          </Button>
          <Button type="submit" variant="contained" color="secondary">
            Next &rarr;
          </Button>
        </CardActions>
      </Form>
    </Card>
  );
};

const validate = values => {
  const errors = {};
  if (!values.title) errors.title = 'Title is required.';
  if (!values.subject) errors.subject = 'Subject is required.';
  if (!values.recipients) errors.recipients = 'Recipients are required.';
  if (!values.body) errors.body = 'Body is required.';
  errors.recipients = validateEmails(values.recipients || '');
  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
