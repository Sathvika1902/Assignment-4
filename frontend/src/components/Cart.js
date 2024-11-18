import React, { useEffect, useState, useCallback } from 'react';
import '../styles/Cart.css';
import { fetchCart, addToCart, removeFromCart } from '../Utils/api';

function Cart({ userId }) {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState(''); // Message for checkout

  // Fetch the cart for the logged-in user
  const loadCart = useCallback(async () => {
    try {
      const cart = await fetchCart(userId); // Fetch user's cart from backend
      setCartItems(cart);
    } catch (error) {
      console.error('Error fetching cart:', error.message);
    }
  }, [userId]);

  // Update the quantity of an item in the cart
  const updateQuantity = async (productId, quantity) => {
    try {
      await addToCart(userId, productId, quantity); // Add or update cart item
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product_id === productId ? { ...item, quantity } : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error.message);
    }
  };

  // Remove an item from the cart
  const handleRemove = async (productId) => {
    try {
      await removeFromCart(userId, productId); // Remove item from backend
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product_id !== productId)
      );
    } catch (error) {
      console.error('Error removing item:', error.message);
    }
  };

  // Checkout - Clear all items from the cart
  const handleCheckout = () => {
    setCartItems([]); // Clear the cart
    setMessage('Congratulations, you have placed all your orders!'); // Success message
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Fetch the cart when the component mounts or userId changes
  useEffect(() => {
    loadCart();
  }, [loadCart]);

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {message && (
        <div className="alert alert-success text-center mt-3">{message}</div>
      )}
      {cartItems.length === 0 && !message ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div
                key={item.product_id}
                className="cart-item card mb-3 shadow-sm"
              >
                <div className="row g-0 align-items-center">
                  {/* Product Image */}
                  <div className="col-md-2">
                    <img
                      src={item.image_url}
                      alt={item.product_name}
                      className="img-fluid rounded-start"
                      style={{ maxHeight: '100px', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{item.product_name}</h5>
                      <p className="card-text">
                        <strong>Price:</strong> ${item.price} each
                      </p>
                    </div>
                  </div>

                  {/* Quantity and Remove Button */}
                  <div className="col-md-4 d-flex align-items-center justify-content-end">
                    <div className="me-3">
                      <label
                        htmlFor={`quantity-${item.product_id}`}
                        className="form-label"
                      >
                        Quantity:
                      </label>
                      <select
                        id={`quantity-${item.product_id}`}
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.product_id,
                            parseInt(e.target.value)
                          )
                        }
                        className="form-select"
                        style={{ maxWidth: '80px' }}
                      >
                        {[...Array(10).keys()].map((n) => (
                          <option key={n + 1} value={n + 1}>
                            {n + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={() => handleRemove(item.product_id)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="text-end mt-4">
            <h4>Total Price: ${calculateTotalPrice()}</h4>
          </div>

          {/* Checkout Button */}
          <div className="text-end mt-3">
            <button
              className="btn btn-success"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
