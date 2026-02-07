// Firebase CDN imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB2YCsZOAxa2ISomg1...",
  authDomain: "epic-pokemon-store.firebaseapp.com",
  projectId: "epic-pokemon-store",
  storageBucket: "epic-pokemon-store.appspot.com",
  messagingSenderId: "667844835352",
  appId: "1:667844835352:web:002a3c...",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
