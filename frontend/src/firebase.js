// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TUMHARA_API_KEY",
  authDomain: "TUMHARA_PROJECT.firebaseapp.com",
  projectId: "TUMHARA_PROJECT_ID",
  appId: "TUMHARA_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
