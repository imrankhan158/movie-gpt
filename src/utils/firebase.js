// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb6sCGNFcXgQqbmjk9fwKWyAYChPhve5U",
  authDomain: "movie-gpt.firebaseapp.com",
  projectId: "movie-gpt",
  storageBucket: "movie-gpt.appspot.com",
  messagingSenderId: "3659375167",
  appId: "1:3659375167:web:32f5c400d524c6f93e8e8a",
  measurementId: "G-SR8G3GVKPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
