const express = require('express');
const morgan = require('morgan');
const passportConfig = require('./services/passport');
const cookieSession = require('cookie-session');
const passport = require('passport');

const authRouter = require('./routes/authRoutes');
const appRouter = require('./routes/appRoutes');

const app = express();

//Config for Passport with Cookie Session
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Configuration for Morgan for logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//JSON body parser middleware
app.use(express.json());

//Routers
app.use('/', authRouter);
app.use('/api/v1', appRouter);

if (process.env.NODE_ENV === 'production') {
  //Express will serve the production assets
  app.use(express.static('client/build'));

  //express will serve index.html if it doesn't know the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
