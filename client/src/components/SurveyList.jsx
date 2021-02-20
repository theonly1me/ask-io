import React, { useEffect } from 'react';
import { Paper, Card, Typography, CardActions, Chip } from '@material-ui/core';
import Yes from '@material-ui/icons/CheckCircle';
import No from '@material-ui/icons/Cancel';
import { connect } from 'react-redux';
import * as actions from '../actions';

const renderSurveys = surveys => {
  return surveys.reverse().map(survey => {
    return (
      <Card
        style={{
          position: 'relative',
          top: '20px',
          padding: '20px',
          marginBottom: '20px',
        }}
        key={survey._id}
      >
        <Typography variant="h6" color="inherit" paragraph>
          {survey.title}
        </Typography>
        <Typography variant="body2" color="inherit" paragraph>
          {survey.body}
        </Typography>
        <CardActions style={{ marginBottom: '10px' }}>
          <Chip
            variant="outlined"
            avatar={<Yes style={{ backgroundColor: 'transparent' }} />}
            label={`Yes: ${survey.yes}`}
            style={{ color: '#00b894', borderColor: '#00b894' }}
          />
          <Chip
            variant="outlined"
            avatar={<No style={{ backgroundColor: 'transparent' }} />}
            label={`No: ${survey.no}`}
            style={{ color: '#da344d', borderColor: '#da344d' }}
          />
        </CardActions>
        <Typography variant="caption" color="inherit">
          {new Date(survey.dateSent).toLocaleString()}
        </Typography>
      </Card>
    );
  });
};

const SurveyList = props => {
  useEffect(() => {
    props.fetchSurveys();
  }, []);

  return (
    <div style={{ marginBottom: '200px' }}>{renderSurveys(props.surveys)}</div>
  );
};

const mapStateToProps = ({ surveys }) => {
  debugger;
  return { surveys };
};

export default connect(mapStateToProps, actions)(SurveyList);
