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

try {

const provider = new GoogleAuthProvider();

await signInWithRedirect(
  auth,
  provider
);

} catch (error) {

alert(error.message);

}

};

// Redirect Result
getRedirectResult(auth)
.then((result) => {

if (result && result.user) {

alert(
  "Welcome " +
  result.user.displayName
);

location.href =
  "account.html";

}

})
.catch((error) => {

console.log(error);

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

location.href =
  "account.html";

} catch (error) {

alert(error.message);

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

alert(error.message);

}

};

// Logout
window.logoutUser = async function () {

try {

await signOut(auth);

location.href =
  "profile.html";

} catch (error) {

alert(error.message);

}

};

// Auto Redirect If Already Logged In
onAuthStateChanged(
auth,
(user) => {

if (user) {

  console.log(
    "Logged In:",
    user.email
  );

  if (
    !location.pathname.includes(
      "account.html"
    )
  ) {

    location.href =
      "account.html";

  }

}

}
);
