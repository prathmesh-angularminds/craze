require('dotenv').config()
const app = require('./app');
const mongoose = require('mongoose');
const logger = require('./config/logger');

let server;
logger.info("Node Environment => " + process.env.PORT)

// Connecting database
mongoose.connect(`${process.env.MONGODB_URL}`).then(() => {
    logger.info("Connected to mongoose => " + process.env.MONGODB_URL)
    server = app.listen(process.env.PORT, () => {
        logger.info("Node server listening on port => " + process.env.PORT);
    })
}).catch(() => {
    logger.error("Failed to connect mongoose ")
})

const uncaughtException = () => {
    if (server) {
        server.close(() => {
            logger.info("Server closed")
            process.exit(1)
        })
    } else {
        process.exit(1);
    }
}

const unHandlerRejection = (error) => {
    logger.error(error);
    uncaughtException();
}

// uncaught exceptions are a special case in the family of exceptions, in that they are not caught in the catch block, and the browser intercepts these exceptions and handles them
// https://www.geeksforgeeks.org/how-to-manage-uncaught-exceptions-in-javascript-in-order-to-show-the-error-message-in-user-interface/
process.on('uncaughtException', unHandlerRejection)
// The unhandledrejection event is sent to the global scope of a script when a JavaScript Promise that has no rejection handler is rejected
// https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event
process.on('unhandledRejection', unHandlerRejection)
