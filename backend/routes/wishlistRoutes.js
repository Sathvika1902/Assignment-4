const express = require('express');
const {
  getUserWishlist,
  addToWishlist,
  removeFromWishlist,
} = require('../controllers/wishlistController');
const authenticateToken = require('../middleware/authMiddleware'); // Middleware to verify JWT

const router = express.Router();

// Fetch user's wishlist
router.get('/:user_id', authenticateToken, getUserWishlist);

// Add or update product in wishlist
router.post('/', authenticateToken, addToWishlist);

// Remove a product from wishlist
router.delete('/:user_id/:product_id', authenticateToken, removeFromWishlist);

module.exports = router;