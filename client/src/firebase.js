// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4629d.firebaseapp.com",
  projectId: "mern-estate-4629d",
  storageBucket: "mern-estate-4629d.appspot.com",
  messagingSenderId: "940594098992",
  appId: "1:940594098992:web:8d87b1aec37bc533034ef5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
