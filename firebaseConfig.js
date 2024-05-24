// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc01OjZRtJdYYxYJ0KMiYKT-tBEdCbtY4",
  authDomain: "mytip-lee.firebaseapp.com",
  projectId: "mytip-lee",
  storageBucket: "mytip-lee.appspot.com",
  messagingSenderId: "574273119510",
  appId: "1:574273119510:web:83dde31515705e6fcf5c37",
  measurementId: "G-7SV6TDML3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);