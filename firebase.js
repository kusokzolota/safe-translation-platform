// Import Firebase SDK modules using ES6 imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNo5LrChnyV4hdQf8W51RbC68Ob2jxojE",
  authDomain: "asya-50721.firebaseapp.com",
  projectId: "asya-50721",
  storageBucket: "asya-50721.appspot.com",
  messagingSenderId: "24627661957",
  appId: "1:24627661957:web:f6354555a3b0f289c62dec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export auth and db for other modules
export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword };
