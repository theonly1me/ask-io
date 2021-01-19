import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import CreditIcon from '@material-ui/icons/AttachMoney';
import useStyles from '../utils/styles';

const StripePayments = ({ handleToken, user }) => {
  const classes = useStyles();
  return (
    <StripeCheckout
      name="ASK.IO"
      description="Add 50 credits to account!"
      amount={500}
      token={token => handleToken(token)}
      stripeKey={process.env.REACT_APP_KEY}
    >
      <IconButton color="secondary" className={classes.paymentIconButton}>
        <Badge
          color="secondary"
          badgeContent={user?.data?.credits}
          max={2000}
          showZero
        >
          <CreditIcon fontSize="large" className={classes.paymentButton} />
        </Badge>
      </IconButton>
    </StripeCheckout>
  );
};

const mapStateToProps = (state, hasOwnProps) => {
  let user = state.auth?.user;
  return {
    user,
  };
};

export default connect(mapStateToProps, actions)(StripePayments);
