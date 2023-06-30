import React, { useState } from 'react';
import './user_login.css';
function LoginPage() {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in...');
  };

  const handleRegister = () => {
    // Handle register logic here
    console.log('Redirecting to register page...');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Redirecting to forgot password page...');
  };

  return (
    <center>
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label htmlFor="loginId">Login ID:</label>
          <input
            type="text"
            id="loginId"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <div>
        <a href="#" onClick={handleRegister}>Register</a>     
        <a href="#" onClick={handleForgotPassword}>Forgot Password</a>
      </div>
    </div>
    </center>
  );
}

export default LoginPage;
