import React, { useState } from 'react';
import './loginuppage.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/kritova_logo.png';
import appleLogo from '../assets/apple.png';
import googleLogo from '../assets/google.png';



const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple mock validation
    if (!formData.email || !formData.password) {
      setError('Please enter both email and password.');
      return;
    }

    // You could replace this with actual login API logic
    console.log('Login Data:', formData);
    alert('Login successful!');
    navigate('/'); // Redirect after login
  };

  return (
    <div className="login-container fade-in">
      <div className="login-box">
      <a href="/" className="logo">
        <img className="logo-img" src={logo}  alt="Kritova Logo"/>
      </a>
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
  className="toggle-password"
  onClick={() => setShowPassword(!showPassword)}
  title={showPassword ? 'Hide password' : 'Show password'}
>
  {showPassword ? (
    // Eye Slash SVG
    <svg xmlns="http://www.w3.org/2000/svg" className="eye-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18M10.584 10.582a2.002 2.002 0 012.832 2.836m-5.416-5.418a5.998 5.998 0 018.336 8.338M15 12a3 3 0 00-3-3m0 0a3 3 0 013 3m-3 0a3 3 0 01-3 3m0 0a3 3 0 003-3z" />
    </svg>
  ) : (
    // Eye Open SVG
    <svg xmlns="http://www.w3.org/2000/svg" className="eye-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
    </svg>
  )}
</span>

          </div>

          {error && <small className="error">{error}</small>}

          <button type="submit" className="login-button">Login</button>
          <div className="social-login-inline">
            <span className="signin-text">Or login in with</span>
            <img src={googleLogo} alt="Google logo" className="social-icon-inline" />or<img src={appleLogo} alt="Apple logo" className="social-icon-inline" />

          </div>


        </form>

        <p className="login-switch">
          Don't have an account? <a href="/signuppage">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
