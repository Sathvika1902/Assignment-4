import React, { useState } from 'react';
import { loginUser } from '../Utils/api';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // To decode the token
import '../styles/Auth.css';

function Login({ setUserLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // To handle loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading while authenticating
    setError(''); // Clear previous errors

    try {
      const response = await loginUser(email, password);
      localStorage.setItem('token', response.token); // Save the token
      setUserLoggedIn(true);
      const decoded = jwtDecode(response.token); // Decode the token
      const userId = decoded.user_id; // Extract the `userId` from the token
      console.log('Logged in userId:', userId);

      // Redirect to the home page after login
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false); // Hide loading
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;

