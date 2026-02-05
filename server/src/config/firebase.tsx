// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK5588KPe9MvmixwhvgB5sXzTTLdEDnSw",
  authDomain: "shopie-54803.firebaseapp.com",
  projectId: "shopie-54803",
  storageBucket: "shopie-54803.firebasestorage.app",
  messagingSenderId: "1087798696709",
  appId: "1:1087798696709:web:d9c1c30b03e6e280e4b56c",
  measurementId: "G-XPQCY6WK18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);