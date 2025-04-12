import React, { useState } from 'react';
import './signuppage.css';
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {
const [formData, setFormData] = useState({
username: '',
email: '',
password: '',
confirmPassword: '',
});

const navigate = useNavigate();

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();
if (formData.password !== formData.confirmPassword) {
alert("Passwords do not match.");
return;
}
console.log('Signup Data:', formData);
// Here you can add API call to register the user

// Navigate to login page after successful signup
navigate('/');

};


return (<>

<div className="signup-container">
    <div className="signup-box">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
       <label htmlFor="confirmPassword">Re-enter Password</label>
        <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
         />

        <button type="submit" className="signup-button" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  </div>
</>

     
);
};

export default SignupPage;

