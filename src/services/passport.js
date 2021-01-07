const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

//Google Strategy Configuration for oauth 2
const strategy = new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
  },
  (accessToken, refreshToken, userProfile, done) => {
    console.log(userProfile);
  }
);
passport.use(strategy);
