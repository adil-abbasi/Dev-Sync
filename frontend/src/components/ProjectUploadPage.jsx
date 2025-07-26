import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function ProjectUploadPage() {
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Project Upload Page</h1>
      <p>This is the main dashboard after login.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProjectUploadPage;
