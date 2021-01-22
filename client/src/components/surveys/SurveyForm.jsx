import React from 'react';
import { reduxForm } from 'redux-form';
import { Card, Button, CardActions } from '@material-ui/core';
import { SurveyField } from './SurveyField';

const SurveyForm = ({ handleSubmit }) => {
  return (
    <Card
      style={{
        position: 'relative',
        top: '10%',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <form onSubmit={handleSubmit(values => console.log(values))}>
        <SurveyField label="Survey Title" name="surveyTitle" autoFocus={true} />
        <SurveyField label="Subject" name="subject" />
        <SurveyField
          label="Recipients"
          name="recipients"
          multiline="true"
          rows={5}
          placeholder="dev@askio.com, pulavarthi.preetham@askio.com, ... (comma separated entries)"
        />
        <SurveyField label="Mailbody" name="body" rows={10} multiline="true" />

        <CardActions>
          <Button type="submit" variant="contained" color="secondary">
            Send
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

const validate = values => {
  const errors = {};
  if (!values.title) errors.title = 'Title is required.';
  console.log(errors);
  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);
