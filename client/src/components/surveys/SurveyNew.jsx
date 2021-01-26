import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';
import { reduxForm } from 'redux-form';
import { Paper, Grid, Typography, Fade } from '@material-ui/core';
import useStyles from '../../utils/styles';

const SurveyNew = ({ setHeaderTab }) => {
  const classes = useStyles();
  const [review, setReview] = useState(false);
  return (
    <Paper
      className={classes.mainFeaturedBody}
      elevation={3}
      style={{ borderRadius: 0 }}
    >
      <Paper className={classes.mainFeaturedHeader} style={{ borderRadius: 0 }}>
        <Paper style={{ position: 'relative', top: '50%', opacity: 0.9 }}>
          <Typography component="h1" variant="h4" color="inherit" gutterBottom>
            Feedback <span className={classes.colorText}>Matters.</span>
          </Typography>
        </Paper>
      </Paper>
      <Grid container>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          {review ? (
            <SurveyReview
              onBack={() => setReview(false)}
              setHeaderTab={setHeaderTab}
            />
          ) : (
            <SurveyForm onNext={() => setReview(true)} />
          )}
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </Paper>
  );
};

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
