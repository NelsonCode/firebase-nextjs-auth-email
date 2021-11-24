import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqzHNGferFbV0Cw6X0lxLlU6ItcsnlHBs",
  authDomain: "next-firebase-e3207.firebaseapp.com",
  projectId: "next-firebase-e3207",
  storageBucket: "next-firebase-e3207.appspot.com",
  messagingSenderId: "1083672442768",
  appId: "1:1083672442768:web:7edea3ab0b0010e5bb2515",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
