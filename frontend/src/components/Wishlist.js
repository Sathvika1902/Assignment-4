import React, { useEffect } from 'react';
import '../styles/Wishlist.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchWishlist, removeFromWishlist } from '../Utils/api';

function Wishlist({ userId, wishlistItems, setWishlistItems, addToCart }) {
  // Fetch wishlist items from the backend
  useEffect(() => {
    const loadWishlist = async () => {
      try {
        const data = await fetchWishlist(userId); // Fetch wishlist items
        setWishlistItems(data || []); // Ensure wishlistItems is an array
      } catch (error) {
        console.error('Error fetching wishlist:', error.message);
      }
    };

    loadWishlist();
  }, [userId, setWishlistItems]);

  // Remove an item from the wishlist
  const handleRemoveFromWishlist = async (productId) => {
    try {
      await removeFromWishlist(userId, productId); // API call to remove item
      setWishlistItems((prevItems) =>
        prevItems.filter((item) => item.product_id !== productId)
      );
    } catch (error) {
      console.error('Error removing from wishlist:', error.message);
    }
  };

  // Move an item from the wishlist to the cart
  const handleMoveToCart = async (item) => {
    try {
      await addToCart({ ...item, quantity: item.quantity || 1 }); // Add the item to the cart
      await handleRemoveFromWishlist(item.product_id); // Remove the item from the wishlist
    } catch (error) {
      console.error('Error moving item to cart:', error.message);
    }
  };

  // Ensure wishlistItems is always defined before rendering
  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <div className="container mt-5">
        <h2>Your Wishlist</h2>
        <p>Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Your Wishlist</h2>
      <div className="wishlist-list">
        {wishlistItems.map((item) => (
          <div
            key={item.product_id}
            className="wishlist-item card mb-3 shadow-sm"
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
                    <strong>Price:</strong> ${item.price}
                  </p>
                  <p className="card-text">
                    <strong>Quantity:</strong> {item.quantity || 1}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="col-md-4 d-flex justify-content-end align-items-center">
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => handleRemoveFromWishlist(item.product_id)}
                >
                  Remove
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleMoveToCart(item)}
                >
                  Move to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
