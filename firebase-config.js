// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDrxsH4aPZF1q0ZsJ4CeeYZfNd6azCpNKc",
  authDomain: "shayroo-6e05c.firebaseapp.com",
  projectId: "shayroo-6e05c",
  storageBucket: "shayroo-6e05c.firebasestorage.app",
  messagingSenderId: "456932814097",
  appId: "1:456932814097:web:357b4fa0da7676c17bf0b0",
  measurementId: "G-BN8Y648DCZ"
};

// Initialize
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
