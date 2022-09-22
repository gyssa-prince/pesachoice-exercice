// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6TWRu6UMVCNPS01iIkG7oW2d7d53smAQ",
  authDomain: "task1-cdfb5.firebaseapp.com",
  projectId: "task1-cdfb5",
  storageBucket: "task1-cdfb5.appspot.com",
  messagingSenderId: "747467469278",
  appId: "1:747467469278:web:9c92422f3d1142c9972d4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
