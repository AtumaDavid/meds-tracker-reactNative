// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQI_yQPZLjercRyKXBVeIM4sOctcGn7pY",
  authDomain: "reactnative-med-tracker.firebaseapp.com",
  projectId: "reactnative-med-tracker",
  storageBucket: "reactnative-med-tracker.firebasestorage.app",
  messagingSenderId: "641532870529",
  appId: "1:641532870529:web:c0b8d876f8f2e7d012b280",
  measurementId: "G-P0WS87RL4C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
