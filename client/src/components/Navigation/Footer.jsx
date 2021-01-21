import React from 'react';
import useStyles from '../../utils/styles';
import { IconButton, Link, Typography, Container } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <span className={classes.colorText}>
        Atchyut Preetham Pulavarthi
      </span>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" gutterBottom>
          <span className={classes.colorText}> Made with ☕</span>
        </Typography>
        <Typography align="center">
          <IconButton
            style={{ color: 'inherit' }}
            component={Link}
            href="https://www.instagram.com/pulavarthi.preetham/"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            style={{ color: 'inherit' }}
            component={Link}
            href="https://github.com/theonly1me"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            style={{ color: 'inherit' }}
            component={Link}
            href="https://www.twitter.com/AtchyutPreetham"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            style={{ color: 'inherit' }}
            component={Link}
            href="https://www.linkedin.com/in/atchyutpulavarthi/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
