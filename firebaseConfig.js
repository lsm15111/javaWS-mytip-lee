// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";


//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc01OjZRtJdYYxYJ0KMiYKT-tBEdCbtY4",
  authDomain: "mytip-lee.firebaseapp.com",
  databaseURL: "https://mytip-lee-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mytip-lee",
  storageBucket: "mytip-lee.appspot.com",
  messagingSenderId: "574273119510",
  appId: "1:574273119510:web:83dde31515705e6fcf5c37",
  measurementId: "G-7SV6TDML3P"
};

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const firebase_db = firebase.database();
