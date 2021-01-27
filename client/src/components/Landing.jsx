import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Paper, Grow } from '@material-ui/core';
import useStyles from '../utils/styles';
import { connect } from 'react-redux';

const Landing = ({ user, setHeaderTab }) => {
  const classes = useStyles();
  const [quote, setQuote] = useState(1);
  useEffect(() => {
    const timerID = setInterval(() => {
      const quoteID = Math.floor(Math.random() * 3) + 1;
      quoteID !== quote && setQuote(quoteID);
    }, 4000);
    return () => {
      clearTimeout(timerID);
    };
  }, []);
  return (
    <Paper className={classes.mainFeaturedPost} style={{ borderRadius: 0 }}>
      {<img style={{ display: 'none' }} alt="cover" />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item>
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
            {quote === 1 && (
              <Grow in={quote === 1} timeout={2000}>
                <Typography variant="h6" color="inherit" paragraph>
                  Ask the right questions,{' '}
                  <span className={classes.colorText}>
                    leave the rest to us.
                  </span>
                </Typography>
              </Grow>
            )}
            {quote === 2 && (
              <Grow in={quote === 2} timeout={2000}>
                <Typography variant="h6" color="inherit" paragraph>
                  Bridge the gap between you and{' '}
                  <span className={classes.colorText}>the consumer.</span>
                </Typography>
              </Grow>
            )}
            {quote === 3 && (
              <Grow in={quote === 3} timeout={2000}>
                <Typography variant="h6" color="inherit" paragraph>
                  We're here to fastrack your{' '}
                  <span className={classes.colorText}>feedback loop.</span>
                </Typography>
              </Grow>
            )}

            {user?.data ? (
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
