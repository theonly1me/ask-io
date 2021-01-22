import React from 'react';
import SurveyForm from './SurveyForm';
import { Paper, Grid, Typography } from '@material-ui/core';
import useStyles from '../../utils/styles';

const SurveyNew = () => {
  const classes = useStyles();
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
          <SurveyForm />
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </Paper>
  );
};

export default SurveyNew;
