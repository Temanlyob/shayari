alert("auth.js loaded");

import { auth } from "./firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// Google Login
window.googleLogin = async function () {

  alert("Google button clicked");

  try {

    const provider = new GoogleAuthProvider();

    alert("Redirect starting");

    await signInWithRedirect(
      auth,
      provider
    );

  } catch (error) {

    alert(
      "Google Error:\n" +
      error.code +
      "\n" +
      error.message
    );

  }

};

// Redirect Result
// Redirect Result
getRedirectResult(auth)
.then((result) => {

  if (result && result.user) {

    alert(
      "REDIRECT SUCCESS:\n" +
      result.user.email
    );

  }

})
.catch((error) => {

  alert(
    "REDIRECT ERROR:\n" +
    error.code +
    "\n" +
    error.message
  );

});

// Email Login
window.loginUser = async function () {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  try {

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    location.href =
      "account.html";

  } catch (error) {

    alert(
      error.code +
      "\n" +
      error.message
    );

  }

};

// Signup
window.signupUser = async function () {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  try {

    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    alert("Account Created");

    location.href =
      "account.html";

  } catch (error) {

    alert(
      error.code +
      "\n" +
      error.message
    );

  }

};

// Forgot Password
window.resetPassword = async function () {

  const email =
    document.getElementById("email").value;

  if (!email) {

    alert("Enter email first");

    return;

  }

  try {

    await sendPasswordResetEmail(
      auth,
      email
    );

    alert(
      "Password reset email sent"
    );

  } catch (error) {

    alert(
      error.code +
      "\n" +
      error.message
    );

  }

};

// Logout
window.logoutUser = async function () {

  try {

    await signOut(auth);

    location.href =
      "profile.html";

  } catch (error) {

    alert(
      error.code +
      "\n" +
      error.message
    );

  }

};

// Auth State Check
onAuthStateChanged(auth, (user) => {

  if (user) {

    alert(
      "USER FOUND:\n" +
      user.email
    );

    location.href = "account.html";

  }

});
