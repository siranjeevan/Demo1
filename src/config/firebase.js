// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEN_Q5OREtPIgoZtlPonk_igNc5GHQeTE",
  authDomain: "dhwayam-3a777.firebaseapp.com",
  projectId: "dhwayam-3a777",
  storageBucket: "dhwayam-3a777.firebasestorage.app",
  messagingSenderId: "5998619400",
  appId: "1:5998619400:web:3b0e8bddcf2dbf85509abd",
  measurementId: "G-9JV2ZB3MRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
