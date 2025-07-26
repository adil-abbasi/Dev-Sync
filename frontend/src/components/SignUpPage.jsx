import React from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Sign Up (Coming Soon)</h2>
      <button onClick={() => navigate("/")}>Back to Login</button>
    </div>
  );
}

export default SignUpPage;
