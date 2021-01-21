import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import * as actions from '../actions';

//Material UI
import {
  ThemeProvider,
  Paper,
  createMuiTheme,
  useMediaQuery,
} from '@material-ui/core';
import useStyles from '../utils/styles';

//App Components
import Header from './Navigation/Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Footer from './Navigation/Footer';

const App = props => {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const { getUser } = props;

  useEffect(() => {
    (async () => {
      await getUser();
    })();
  }, []);

  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#52796f',
        main: '#2f3e46',
        dark: '#212c32',
      },
      secondary: {
        light: '#ec5766',
        main: '#da344d',
        dark: '#c42348',
      },
      background: {
        paper: `${darkMode ? '#1e272e' : '#fff'}`,
      },
      type: `${darkMode ? 'dark' : 'light'}`,
    },
  });

  //Header Click Handler
  const [tabValue, setTabValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.paperContainer} style={{ borderRadius: 0 }}>
        <BrowserRouter>
          <Header
            setDarkMode={setDarkMode}
            user={props.user}
            darkMode={darkMode}
            value={tabValue}
            setValue={setTabValue}
          />
          <Route path="/" exact>
            <Landing setHeaderTab={setTabValue} />
          </Route>
          <Route path="/surveys" exact component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          <Footer />
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state, hasOwnProps) => {
  const user = state?.auth?.user;
  return {
    user,
  };
};

export default connect(mapStateToProps, actions)(App);
