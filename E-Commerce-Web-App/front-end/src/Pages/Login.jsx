import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Login</button>
        <p className="login-signup">
          Don't have an account? <span>SignUp Here</span>
        </p>
      </div>
    </div>
  );
}
