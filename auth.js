import { auth } from "./firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// Google Login
window.googleLogin = async function () {

  const provider = new GoogleAuthProvider();

  try {

    const result = await signInWithPopup(auth, provider);

    alert("Welcome " + result.user.displayName);

    window.location.href = "account.html";

  } catch (error) {

    alert(error.message);

  }

};

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

    window.location.href = "account.html";

  } catch (error) {

    alert(error.message);

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

  } catch (error) {

    alert(error.message);

  }

};

// Forgot Password
window.resetPassword = async function () {

  const email =
    document.getElementById("email").value;

  try {

    await sendPasswordResetEmail(auth, email);

    alert("Password reset email sent");

  } catch (error) {

    alert(error.message);

  }

};

// Logout
window.logoutUser = async function () {

  await signOut(auth);

  location.href = "profile.html";

};

// Check Login
onAuthStateChanged(auth, (user) => {

  if (user) {

    console.log(user.email);

  }

});
