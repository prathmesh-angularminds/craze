// npm: https://www.npmjs.com/package/winston
// youtube video: https://www.youtube.com/watch?v=m2q1Cevl_qw&t=1360s
const winston = require('winston');

const enumerateErrorFormat = winston.format((info) => {
    if (info instanceof Error) {
        Object.assign(info, { message: info.stack });
    }
    return info;
});

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.colorize({all: true}),
        enumerateErrorFormat(),
        winston.format.splat(),
        winston.format.printf(({level,message}) => `${level}: ${message}`)
    ),
    transports: [
        new winston.transports.Console({ stderrLevels: ['error'] })
    ],
});

// Dynamic colors to winston logger
winston.addColors({
    error: 'bold red',
    warn: 'yellow',
    info: 'cyan',
    debug: 'green'
})

module.exports = logger;