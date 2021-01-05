const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//CID
//291281965874-gd0tr6ktm694ef95g0gj7t6sfd7rjjb1.apps.googleusercontent.com
//CSecret
//apG5k992dGfrphCElPGe4kHw

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
// const strategy = new GoogleStrategy();
// passport.use(strategy);

//JSON body parser middleware
app.use(express.json());

const router = express.Router();

router.route('/').get((req, res) => {
  res.send('Hello There!');
});

app.use('/api/v1', router);

module.exports = app;
