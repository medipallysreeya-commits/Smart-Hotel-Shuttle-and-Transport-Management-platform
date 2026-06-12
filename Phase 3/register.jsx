function Register({ setShowRegister }) {

  const handleRegister = () => {
    alert("Registration Successful!");

    setTimeout(() => {
      setShowRegister(false);
    }, 500);
  };
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1>SMART HOTEL SHUTTLE & TRANSPORT MANAGEMENT</h1>
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Phone Number" />
        <input type="text" placeholder="Room Number" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

       <button
  className="auth-btn"
  onClick={handleRegister}
>
  Register
</button>

        <p>
          Already have an account?{" "}
          <span onClick={() => setShowRegister(false)}>
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;