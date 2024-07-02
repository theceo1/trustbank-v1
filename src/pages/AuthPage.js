// pages/AuthPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="auth-container">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="auth-box"
      >
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)} className="toggle">
          {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
