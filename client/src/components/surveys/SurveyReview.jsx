import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button, CardActions, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const SurveyReview = props => {
  const {
    form: {
      surveyForm: { values },
    },
  } = props;
  const history = useHistory();
  const handleSubmit = () => {
    props.submitSurvey();
    props.setHeaderTab(0);
    history.push('/');
  };

  return (
    <Card
      style={{
        position: 'relative',
        top: '10%',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <form>
        <TextField
          type="text"
          label="Survey Title"
          defaultValue={values.title}
          name="title"
          style={{ width: '100%', margin: '10px 0' }}
          variant="outlined"
          disabled
        />
        <TextField
          type="text"
          label="Subject"
          name="subject"
          defaultValue={values.subject}
          style={{ width: '100%', margin: '10px 0' }}
          variant="outlined"
          disabled
        />
        <TextField
          label="Recipients"
          type="text"
          defaultValue={values.recipients}
          name="recipients"
          rows={5}
          style={{ width: '100%', margin: '10px 0' }}
          variant="outlined"
          multiline
          disabled
        />
        <TextField
          type="text"
          label="Mailbody"
          defaultValue={values.body}
          name="body"
          rows={10}
          multiline
          style={{ width: '100%', margin: '10px 0' }}
          variant="outlined"
          disabled
        />

        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={props.onBack}
            style={{ marginRight: 10 }}
          >
            &larr; Back
          </Button>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    form: state.form,
  };
};

export default connect(mapStateToProps, actions)(SurveyReview);
