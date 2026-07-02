// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgQQNxyKQX2-qTLlc-JEIHfIPeyucU27c",
  authDomain: "mama-njeri-s-hotel.firebaseapp.com",
  projectId: "mama-njeri-s-hotel",
  storageBucket: "mama-njeri-s-hotel.firebasestorage.app",
  messagingSenderId: "356995940326",
  appId: "1:356995940326:web:ef8325ade9a417189da027",
  measurementId: "G-B4QK085LN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);