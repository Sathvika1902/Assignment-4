import axios from 'axios';

// Base URL for the API (configured in environment variables or defaults to localhost)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://18.188.241.73';

// Axios instance for API calls
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to include the JWT token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Get token from localStorage
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// ---- API Functions ----

// User API
export const registerUser = async (user) => {
  const response = await api.post('/api/users/register', user);
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await api.post('/api/users/login', { email, password });
  return response.data;
};

// Product API
export const fetchProducts = async () => {
  const response = await api.get('/api/products');
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await api.get(`/api/products/${id}`);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await api.post('/api/products', product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await api.put(`/api/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/api/products/${id}`);
  return response.data;
};

// Cart API
export const fetchCart = async (userId) => {
  const response = await api.get(`/api/cart/${userId}`);
  return response.data.product_details;
};

export const addToCart = async (userId, productId, quantity, price) => {
  const response = await api.post('/api/cart', {
    user_id: userId,
    product_id: productId,
    quantity: 1,
    price: price,
  });
  return response.data;
};

export const removeFromCart = async (userId, productId) => {
  const response = await api.delete(`/api/cart/${userId}/${productId}`);
  return response.data;
};

// Wishlist API
export const fetchWishlist = async (userId) => {
  const response = await api.get(`/api/wishlist/${userId}`);
  return response.data.product_details;
};

export const addToWishlist = async (userId, productId, quantity, price) => {
  const response = await api.post('/api/wishlist', {
    user_id: userId,
    product_id: productId,
    quantity: 1,
    price: price,
  });
  return response.data;
};

export const removeFromWishlist = async (userId, productId) => {
  const response = await api.delete(`/api/wishlist/${userId}/${productId}`);
  return response.data;
};

export default api;
