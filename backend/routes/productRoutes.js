const express = require('express');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const authenticateToken = require('../middleware/authMiddleware'); // Middleware to verify JWT

const router = express.Router();

// Fetch all products
router.get('/', authenticateToken, getAllProducts);

// Fetch a product by ID
router.get('/:id', authenticateToken, getProductById);

// Create a new product
router.post('/', authenticateToken, createProduct);

// Update product details
router.put('/:id', authenticateToken, updateProduct);

// Delete a product
router.delete('/:id', authenticateToken, deleteProduct);

module.exports = router;