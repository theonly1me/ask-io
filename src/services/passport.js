const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

//Google Strategy Configuration for oauth 2
const strategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
  },
  async (accessToken, refreshToken, userProfile, done) => {
    try {
      let existingUser = await User.findOne({ googleId: userProfile.Id });
      if (!existingUser) {
        User.create({ googleId: userProfile.id }).then(newUser =>
          done(null, newUser)
        );
      } else done(null, existingUser);
    } catch (err) {
      console.error(err);
    }
  }
);
passport.use(strategy);
