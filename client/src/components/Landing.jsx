import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Paper } from '@material-ui/core';
import useStyles from '../utils/styles';
import { connect } from 'react-redux';

const Landing = ({ user, setHeaderTab }) => {
  const classes = useStyles();
  console.log(user);

  return (
    <Paper className={classes.mainFeaturedPost}>
      {<img style={{ display: 'none' }} alt="cover" />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item xs={6} md={6}>
          <Paper className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              A Brilliant way to{' '}
              <span className={classes.colorText}>Survey.</span>
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              Ask the right questions, leave the rest to us.
            </Typography>

            {user ? (
              <>
                <Typography variant="h6">
                  Welcome{' '}
                  <span className={classes.colorText}>{user?.data?.name}</span>
                </Typography>
                <Typography variant="overline" onClick={() => setHeaderTab(2)}>
                  <Link to="/surveys/new" className={classes.bodyLink}>
                    Create your own survey, now{' '}
                    <span className={classes.colorText}>&rarr;</span>
                  </Link>
                </Typography>
              </>
            ) : null}
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = state => {
  const user = state.auth?.user;
  return {
    user,
  };
};

export default connect(mapStateToProps)(Landing);
