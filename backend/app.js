const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const logger = require('./logger'); // Import the Winston logger
const connectDB = require('./db');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const cors = require('cors');

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Middleware for logging HTTP requests using Morgan
app.use(
  morgan('combined', {
    stream: {
      write: (message) => logger.info(message.trim()), // Redirect Morgan logs to Winston
    },
  })
);

// Log all incoming requests
app.use((req, res, next) => {
  logger.info(`${req.method} request to ${req.url}`);
  next();
});

// API Routes
// Mount the user routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);

// Serve React frontend static files
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve React frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Catch-all route for invalid API paths
app.use((req, res) => {
  logger.error(`Invalid route accessed: ${req.url}`);
  res.status(404).json({ message: `Route ${req.url} not found.` });
});

// Global error handler
app.use((err, req, res, next) => {
  logger.error(`Error on ${req.method} ${req.url}: ${err.message}`);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
