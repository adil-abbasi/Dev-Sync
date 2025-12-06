import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "../styles/login.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/upload");
    } catch (error) {
      alert("Login Failed: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/logo192.png" alt="logo" />
        <h1>Welcome to DevSync</h1>
        <button className="login-btn" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
        <p>
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
