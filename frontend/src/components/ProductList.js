import React, { useState, useEffect } from 'react';
import '../styles/ProductList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchProducts } from '../Utils/api';

function ProductList({ userId, addToCart, addToWishlist, cartItems, wishlistItems }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(); // Fetch products from backend
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    loadProducts();
  }, []);

  // Filter products based on search term and price
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (maxPrice === '' || product.price <= parseFloat(maxPrice))
  );

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setMaxPrice('');
  };

  return (
    <div className="container mt-5">
      {/* Filter Controls */}
      <div className="filter-container d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control mx-2"
          style={{ maxWidth: '300px' }}
        />
        <input
          type="number"
          placeholder="Max price..."
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="form-control mx-2"
          style={{ maxWidth: '200px' }}
        />
        <button onClick={resetFilters} className="btn btn-secondary mx-2">
          Reset
        </button>
      </div>

      {/* Product List */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.product_id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={product.image_url}
                alt={product.product_name}
                className="card-img-top img-fluid"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{product.product_name}</h5>
                <p className="card-text text-center">{product.description}</p>
                <p className="text-center text-muted">${product.price}</p>
                <div className="mt-auto">
                  <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-outline-secondary w-100"
                    onClick={() => addToWishlist(product)}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show empty message if no products match the filter */}
      {filteredProducts.length === 0 && (
        <div className="text-center mt-4">
          <h5>No products found.</h5>
        </div>
      )}
    </div>
  );
}

export default ProductList;
