import React, { useState } from 'react';

function Login({ setShowRegister, setPage }) {
  // 1. Create state hooks to track user input live
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Basic guard clause: Make sure they typed an email
    if (!email) {
      alert("⚠️ Please enter your email address to log in!");
      return;
    }

    // 2. Automatically generate a username from the email handle!
    // Example: "asd@gmail.com" splits into ["asd", "gmail.com"], so we grab "asd"
    // We capitalize the first letter so it looks neat on the profile tab!
    const extractedName = email.split('@')[0];
    const formattedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);

    // 3. Save these dynamic parameters into localStorage
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredUser", formattedName);
    
    // Optional fallback placeholders for phone and room if they aren't provided
    localStorage.setItem("registeredPhone", "+91 98765 43210");
    localStorage.setItem("registeredRoom", "Room 302");

    // 4. Redirect the authenticated session straight to the main dashboard
    setPage("dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1>SMART HOTEL SHUTTLE & TRANSPORT MANAGEMENT</h1>
        <h2>Welcome Back</h2>

        {/* Bind input fields to React states */}
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Updated Button execution path */}
        <button
          className="auth-btn"
          onClick={handleLoginClick}
        >
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <span onClick={() => setShowRegister(true)}>
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;