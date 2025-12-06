import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token); // Store JWT
      navigate("/marketplace"); // Redirect to your marketplace
    }
  }, [navigate]);

  return <p className="text-white p-10">Logging you in via Google...</p>;
}
