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
    proxy: true, //for below!
    //google strategy will append http in production which will cause issue with google oauth2,
    //but there is a 2nd factor to this which is that heroku apps run on vms hosted somewhere on AWS.
    //So either pas an additional google strat option or spell out entire url
  },
  async (accessToken, refreshToken, userProfile, done) => {
    const {
      name: { givenName },
      photos,
    } = userProfile;

    try {
      let existingUser = await User.findOne({ googleId: userProfile.id });
      if (!existingUser) {
        const newUser = await User.create({
          googleId: userProfile.id,
          name: givenName,
          photo: photos[0].value,
        });
        return done(null, newUser);
      }
      done(null, existingUser);
    } catch (err) {
      console.error(err);
    }
  }
);
passport.use(strategy);
