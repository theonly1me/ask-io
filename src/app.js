const express = require('express');
const morgan = require('morgan');
const passportConfig = require('./services/passport');

const authRouter = require('./routes/authRoutes');
const appRouter = require('./routes/appRoutes');

const app = express();

//Configuration for Morgan for logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//JSON body parser middleware
app.use(express.json());

//Routers
app.use('/', authRouter);
app.use('/api/v1', appRouter);

module.exports = app;
