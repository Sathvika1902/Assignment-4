import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode library
import NavBar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Login from './components/Login';
import Register from './components/Register';

import {
  fetchCart,
  addToCart,
  removeFromCart,
  fetchWishlist,
  addToWishlist,
  removeFromWishlist,
} from './Utils/api';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(() => {
    return !!localStorage.getItem('token');
  });

  const [userId, setUserId] = useState(null);

  // Helper function to decode userId from the token
  const decodeUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        return decoded.user_id;
      } catch (err) {
        console.error('Error decoding token:', err);
      }
    }
    return null;
  };

  // Set the userId on initial load and whenever userLoggedIn changes
  useEffect(() => {
    if (userLoggedIn) {
      const id = decodeUserIdFromToken();
      setUserId(id);
    } else {
      setUserId(null);
    }
  }, [userLoggedIn]);

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' }); // Notification message

  // Fetch cart and wishlist when user logs in
  useEffect(() => {
    if (userLoggedIn && userId) {
      const loadCartAndWishlist = async () => {
        try {
          const cart = await fetchCart(userId);
          const wishlist = await fetchWishlist(userId);
          setCartItems(cart);
          setWishlistItems(wishlist);
          setMessage({ text: 'Cart and Wishlist loaded successfully!', type: 'success' });
        } catch (error) {
          console.error('Error loading cart or wishlist:', error.message);
          setMessage({ text: 'Error loading cart or wishlist.', type: 'error' });
        }
      };
      loadCartAndWishlist();
    }
  }, [userLoggedIn, userId]);

  // Add to cart
  const addToCartHandler = async (item) => {
    try {
      const updatedCart = await addToCart(userId, item.product_id, item.quantity, item.price);
      setCartItems(updatedCart.product_details);
      setMessage({ text: `${item.product_name} added to cart!`, type: 'success' });
    } catch (error) {
      console.error('Error adding to cart:', error.message);
      setMessage({ text: 'Error adding to cart.', type: 'error' });
    }
  };

  // Remove from cart
  const removeFromCartHandler = async (productId) => {
    try {
      const updatedCart = await removeFromCart(userId, productId);
      setCartItems(updatedCart.product_details);
      setMessage({ text: 'Product removed from cart.', type: 'success' });
    } catch (error) {
      console.error('Error removing from cart:', error.message);
      setMessage({ text: 'Error removing from cart.', type: 'error' });
    }
  };

  // Add to wishlist
  const addToWishlistHandler = async (item) => {
    try {
      const updatedWishlist = await addToWishlist(userId, item.product_id, 1, item.price);
      setWishlistItems(updatedWishlist.product_details);
      setMessage({ text: `${item.product_name} added to wishlist!`, type: 'success' });
    } catch (error) {
      console.error('Error adding to wishlist:', error.message);
      setMessage({ text: 'Error adding to wishlist.', type: 'error' });
    }
  };

  // Remove from wishlist
  const removeFromWishlistHandler = async (productId) => {
    try {
      const updatedWishlist = await removeFromWishlist(userId, productId);
      setWishlistItems(updatedWishlist.product_details);
      setMessage({ text: 'Product removed from wishlist.', type: 'success' });
    } catch (error) {
      console.error('Error removing from wishlist:', error.message);
      setMessage({ text: 'Error removing from wishlist.', type: 'error' });
    }
  };

  // Clear notification after 3 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ text: '', type: '' }), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <Router>
      <NavBar userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      {message.text && (
        <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
          {message.text}
        </div>
      )}
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={<Login setUserLoggedIn={setUserLoggedIn} />}
        />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        {userLoggedIn && (
          <>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <ProductList
                  userId={userId}
                  addToCart={addToCartHandler}
                  addToWishlist={addToWishlistHandler}
                  cartItems={cartItems}
                  wishlistItems={wishlistItems}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductDetails
                  userId={userId}
                  addToCart={addToCartHandler}
                  addToWishlist={addToWishlistHandler}
                  cartItems={cartItems}
                  wishlistItems={wishlistItems}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  userId={userId}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  removeFromCart={removeFromCartHandler}
                />
              }
            />
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  userId={userId}
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                  addToCart={addToCartHandler}
                  removeFromWishlist={removeFromWishlistHandler}
                />
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
