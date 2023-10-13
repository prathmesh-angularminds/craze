// npm: https://www.npmjs.com/package/morgan
// youtube video: https://www.youtube.com/watch?v=v3ZFZWWKxNc

const morgan = require('morgan');
const logger = require('./logger');


const successHandler = morgan(':method :url :status :response-time ms - :res[content-length]', {
    skip: (req, res) => res.statusCode >= 400,
    stream: { write: (message) => logger.info(message.trim()) }
})

const errorHandler = morgan(':method :url :status :response-time ms - :res[content-length]', {
    skip: (req, res) => res.statusCode < 400,
    stream: { write: (message) => logger.error(message.trim()) }
})

module.exports = {
    errorHandler,
    successHandler
}