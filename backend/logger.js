const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

// Define log format
const customFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

// Create a Winston logger instance
const logger = createLogger({
  level: 'info', // Log levels: error, warn, info, http, verbose, debug, silly
  format: combine(
    colorize(), // Adds colors to log levels
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Adds timestamps to logs
    customFormat // Applies custom format
  ),
  transports: [
    new transports.Console(), // Logs to the console
    new transports.File({ filename: 'logs/app.log' }) // Logs to a file
  ],
});

module.exports = logger;