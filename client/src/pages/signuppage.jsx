import React, { useState } from 'react';
import './signuppage.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/kritova_logo.png';

import appleLogo from '../assets/apple.png';
import googleLogo from '../assets/google.png';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Signup Data:', formData);
    alert('Registration successful!');
    navigate('/');
  };

  return (
    <div className="signup-container fade-in">
      <div className="signup-box">
      <a href="/" className="logo">
        <img className="logo-img" src={logo}  alt="Kritova Logo"/>
      </a>
        <h2 className="signup-title">Create Your Account</h2>
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <small className="error">{errors.username}</small>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <small className="error">{errors.email}</small>}

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
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          {errors.password && <small className="error">{errors.password}</small>}

          <label htmlFor="confirmPassword">Re-enter Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}

          <button type="submit" className="signup-button">Register</button>
          <div className="social-login-inline">
            <span className="signin-text">Or login in with</span>
            <img src={googleLogo} alt="Google logo" className="social-icon-inline" />or<img src={appleLogo} alt="Apple logo" className="social-icon-inline" />

          </div>
          <p className="login-switch">
             Already have an account? <a href="/loginuppage">Login Up</a>
        </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
