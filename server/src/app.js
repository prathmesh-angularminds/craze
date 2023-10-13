const express = require('express');
const ApiError = require('./utils/apiError')
const app = express();
const { errorHandler } = require('./middleware/error')
const bodyParser = require('body-parser');
const cors = require('cors')
const httpStatus = require('http-status')
const catchAsync = require('./utils/catchAsync');
const router = require('./routes/index')
require('dotenv').config()
const passport = require('passport')
const { jwtStrategy } = require('./config/passport');
const morgan = require('./config/morgen');

// Api error and success loggers
app.use(morgan.successHandler)
app.use(morgan.errorHandler)

app.use(cors({ origin: '*' }));
app.use(bodyParser.json())

// Initialize passport for authentication
app.use(passport.initialize())
passport.use('jwt',jwtStrategy)

app.use('/api',router)

app.use((req,res,next) => {
    console.log("In error");
})

app.use(catchAsync((req,res,next) => {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,"Internal server error !!!")
}))

// error handler
app.use(errorHandler)

module.exports = app

