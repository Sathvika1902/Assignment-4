const cors = require('cors');

const corsMiddleware = () => {
  // Customize the CORS options as needed
  const corsOptions = {
    origin: ['http://localhost:3000', 'https://your-frontend-domain.com'], // Allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  };

  return cors(corsOptions);
};

module.exports = corsMiddleware;