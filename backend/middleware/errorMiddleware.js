// Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    res.status(err.statusCode || 500).json({
      message: err.message || 'An error occurred.',
      error: process.env.NODE_ENV === 'production' ? undefined : err.stack, // Show stack trace only in development
    });
  };
  
  module.exports = errorHandler;