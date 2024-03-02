// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-real-estate-e7ac7.firebaseapp.com",
  projectId: "mern-stack-real-estate-e7ac7",
  storageBucket: "mern-stack-real-estate-e7ac7.appspot.com",
  messagingSenderId: "247803907044",
  appId: "1:247803907044:web:7091ab07bbe7afbbf4d5f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);