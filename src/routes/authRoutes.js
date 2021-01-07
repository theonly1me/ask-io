const express = require('express');
const passport = require('passport');

const router = express.Router();

router.route('/auth/google').get(
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.route('/auth/google/callback').get(passport.authenticate('google'));

module.exports = router;
