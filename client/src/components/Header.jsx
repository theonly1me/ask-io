import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//Material UI
import {
  AppBar,
  Link as MUILink,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  Avatar,
  Divider,
} from '@material-ui/core';
//Icons
import LoginIcon from '@material-ui/icons/ExitToApp';
import SunIcon from '@material-ui/icons/WbSunny';
import MoonIcon from '@material-ui/icons/NightsStay';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import DashboardIcon from '@material-ui/icons/ListAltRounded';
import NewIcon from '@material-ui/icons/AddCircleOutlineRounded';
import LogoutIcon from '@material-ui/icons/KeyboardBackspace';

import useStyles from '../utils/styles';

import DrawerComponent from './Drawer';
import StripePayments from './StripePayments';

const Header = ({ setDarkMode, darkMode, user, logout, value, setValue }) => {
  const classes = useStyles();

  const handleTabClick = (e, newValue) => {
    setValue(newValue);
  };

  const themeIcon = () => {
    return darkMode ? (
      <SunIcon style={{ color: '#fdcb6e' }} fontSize="large" />
    ) : (
      <MoonIcon style={{ color: '#ffeaa7' }} fontSize="large" />
    );
  };

  //Breakpoints
  const theme = useTheme();
  const isMQMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar color="primary">
        <Toolbar variant="regular">
          <Typography
            // className={classes.title}
            style={{
              fontFamily: 'Sofia, cursive',
              fontSize: 36,
              marginRight: 20,
              textDecoration: 'none',
              color: '#ecf0f1',
            }}
            component={Link}
            to="/"
            onClick={() => setValue(0)}
          >
            askIO
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            style={{ backgroundColor: '#636e72' }}
          />

          {user?.data ? (
            <>
              <Typography style={{ margin: '0 20px' }}>
                <Avatar variant="rounded" src={user?.data?.photo} />
              </Typography>
              <Divider
                orientation="vertical"
                style={{ marginRight: 20, backgroundColor: '#636e72' }}
                flexItem
              />
            </>
          ) : null}
          {isMQMatch ? (
            <DrawerComponent
              classes={classes}
              themeIcon={themeIcon}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          ) : (
            <>
              <Tabs
                onChange={handleTabClick}
                indicatorColor="secondary"
                value={value}
              >
                <Tab
                  icon={<HomeIcon fontSize="large" />}
                  // label="Home"
                  component={Link}
                  to="/"
                  disableRipple
                />
                {user?.data && (
                  <Tab
                    icon={<DashboardIcon fontSize="large" />}
                    // label="Dashboard"
                    component={Link}
                    to="/surveys"
                    disableRipple
                  />
                )}
                {user?.data && (
                  <Tab
                    icon={<NewIcon fontSize="large" />}
                    // label="Create Survey"
                    component={Link}
                    to="/surveys/new"
                    disableRipple
                  />
                )}
              </Tabs>
              <Typography variant="button" style={{ flexGrow: 1 }}>
                {user?.data && <StripePayments />}
              </Typography>
              {!user?.data ? (
                <Button
                  startIcon={<LoginIcon />}
                  color="secondary"
                  variant="contained"
                  component={MUILink}
                  href="/auth/google"
                  className={classes.linkButton}
                >
                  Login
                </Button>
              ) : (
                <Button
                  startIcon={<LogoutIcon />}
                  color="secondary"
                  variant="contained"
                  onClick={() => logout()}
                  // component={MUILink}
                  // href="/api/v1/logout"
                  className={classes.linkButton}
                >
                  Logout
                </Button>
              )}
              <IconButton
                onClick={() => setDarkMode(!darkMode)}
                // className={classes.darkModeButton}
                style={{
                  marginLeft: 15,
                  [theme.breakpoints.down('sm')]: {
                    marginLeft: 0,
                  },
                }}
                edge="end"
              >
                {themeIcon()}
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
const mapStateToProps = state => {
  let user = state.auth?.user;
  return {
    user,
  };
};
export default connect(mapStateToProps, actions)(Header);
