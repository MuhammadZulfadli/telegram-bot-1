const winston = require('winston')
const options = {
    file: {
        level: 'info',
        filename: `${__dirname}/logs/app.log`,
        handleExceptions: true,
        json: true,
        colorize: false
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
    }
}

const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false
})

logger.stream = {
    write: (message) => logger.info(message)
}

module.exports = logger