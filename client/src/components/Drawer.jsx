import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Link as MUILink,
  IconButton,
} from '@material-ui/core';

import LoginIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import DashboardIcon from '@material-ui/icons/ListAltRounded';
import NewIcon from '@material-ui/icons/AddCircleOutlineRounded';
import MenuIcon from '@material-ui/icons/Menu';
import LogoutIcon from '@material-ui/icons/KeyboardBackspace';
import CreditIcon from '@material-ui/icons/AttachMoney';

import StripePayments from './StripePayments';

const DrawerComponent = ({
  themeIcon,
  setDarkMode,
  darkMode,
  classes,
  user,
  logout,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <List>
          <ListItem divider button>
            <ListItemIcon>
              <IconButton disableRipple component={Link} to="/">
                <HomeIcon fontSize="large" />
              </IconButton>
            </ListItemIcon>
          </ListItem>
          {user?.data ? null : (
            <ListItem divider button>
              <ListItemIcon>
                <IconButton
                  disableRipple
                  component={MUILink}
                  href="/auth/google"
                  style={{ color: 'inherit' }}
                >
                  <LoginIcon fontSize="large" />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          )}
          {user?.data ? (
            <ListItem divider button>
              <ListItemIcon>
                <IconButton
                  disableRipple
                  onClick={() => logout()}
                  // component={MUILink}
                  // href="/api/v1/logout"
                  style={{ color: 'inherit' }}
                >
                  <LogoutIcon fontSize="large" />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          ) : null}
          {user?.data ? (
            <ListItem divider button>
              <ListItemIcon>
                <IconButton disableRipple component={Link} to="/surveys">
                  <DashboardIcon fontSize="large" />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          ) : null}
          {user?.data ? (
            <ListItem divider button>
              <ListItemIcon>
                <IconButton disableRipple component={Link} to="/surveys/new">
                  <NewIcon fontSize="large" />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          ) : null}
          {user?.data ? (
            <ListItem divider button>
              <ListItemIcon>
                <IconButton disableRipple component={StripePayments}>
                  <CreditIcon fontSize="large" />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          ) : null}
          <ListItem divider button>
            <IconButton disableRipple onClick={() => setDarkMode(!darkMode)}>
              <ListItemIcon>{themeIcon()}</ListItemIcon>
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        // className={classes.hamburgerMenu}
        style={{ marginLeft: 'auto', zIndex: 1 }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon style={{ color: '#fff' }} />
      </IconButton>
    </>
  );
};

const mapStateToProps = state => {
  let user = state.auth?.user;
  return {
    user,
  };
};

export default connect(mapStateToProps, actions)(DrawerComponent);
