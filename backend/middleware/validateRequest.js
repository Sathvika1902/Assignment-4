// Middleware for validating request body
const validateRequest = (requiredFields) => (req, res, next) => {
    const missingFields = requiredFields.filter((field) => !(field in req.body));
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        message: 'Missing required fields',
        missingFields,
      });
    }
  
    next(); // Proceed to the next middleware if validation passes
  };
  
  module.exports = validateRequest;