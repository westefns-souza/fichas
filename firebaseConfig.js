// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc9GP3xmHpeWsyEfQw8gA5fVGVcRkuGWA",
  authDomain: "fichas-b6c7a.firebaseapp.com",
  projectId: "fichas-b6c7a",
  storageBucket: "fichas-b6c7a.appspot.com",
  messagingSenderId: "921421945379",
  appId: "1:921421945379:web:041ec355623f7b6a03ef96",
  measurementId: "G-20XBZ8EFRB"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);