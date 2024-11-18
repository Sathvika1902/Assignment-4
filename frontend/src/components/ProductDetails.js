import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css';
import { fetchProductById } from '../Utils/api';

function ProductDetails({ userId, addToCart, addToWishlist, cartItems, wishlistItems }) {
  const { id } = useParams(); // Get the product ID from the route
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  // Fetch product details by ID
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id); // Fetch product details from backend
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error.message);
        setError('Product not found.');
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product });
      alert(`${product.product_name} (x${quantity}) has been added to your cart.`);
    }
  };

  const handleAddToWishlist = () => {
    if (product) {
      addToWishlist(product);
      alert(`${product.product_name} has been added to your wishlist.`);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>; // Show a loading message until product data is fetched
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        <img
          src={product.image_url}
          alt={product.product_name}
          className="product-details-image"
        />
        <div className="product-details-info">
          <h1>{product.product_name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="button-group">
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-secondary" onClick={handleAddToWishlist}>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
