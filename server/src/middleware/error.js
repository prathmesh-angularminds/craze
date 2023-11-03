const httpStatus = require('http-status');
const logger = require('./../config/logger');

const errorHandler = (err,req,res,next) => {

    const {statusCode,message} = err;

    res.locals.errorMessage = message;

    // response object
    const response = {
        code: statusCode,
        message,
        stack: err.stack
    }

    logger.error(err);

    res.status(statusCode || httpStatus.INTERNAL_SERVER_ERROR   ).send(response);
}

module.exports = {
    errorHandler
}