// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpGon23U3VX5FOuIKsr_jSMyeutUQwhAo",
  authDomain: "dev-sync-adila.firebaseapp.com",
  projectId: "dev-sync-adila",
  storageBucket: "dev-sync-adila.firebasestorage.app",
  messagingSenderId: "727585150668",
  appId: "1:727585150668:web:ba21e609822dbc4ad79469",
  measurementId: "G-DYNCN5PD4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);