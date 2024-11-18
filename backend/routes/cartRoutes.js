const express = require('express');
const { getUserCart, addToCart, deleteCart, deleteProductFromCart } = require('../controllers/cartController');
const authenticateToken = require('../middleware/authMiddleware'); // Middleware to verify JWT

const router = express.Router();

// Fetch user's cart
router.get('/:user_id', authenticateToken, getUserCart);

// Add or update product in cart
router.post('/', authenticateToken, addToCart);

// Delete user's cart (checkout or clear cart)
router.delete('/:user_id', authenticateToken, deleteCart);

router.delete('/:user_id/:product_id', deleteProductFromCart); // Delete a single product from the cart

module.exports = router;