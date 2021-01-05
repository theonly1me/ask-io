const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//JSON body parser middleware
app.use(express.json());

const router = express.Router();

router.route('/').get((req, res) => {
  res.send('Hello There!');
});

app.use('/api/v1', router);

module.exports = app;
