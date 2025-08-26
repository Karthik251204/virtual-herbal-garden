// signin.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvN2-YI3tQedibLhOz3akqygtAPJoytH4",
  authDomain: "medical-c19a4.firebaseapp.com",
  projectId: "medical-c19a4",
  storageBucket: "medical-c19a4.appspot.com",
  messagingSenderId: "1083734088000",
  appId: "1:1083734088000:web:4d782c75584aebb9aa02a5",
  measurementId: "G-EB5BQ30JQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const registerButton = document.getElementById("submit");
if (registerButton) {
  registerButton.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Registration successful!");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("Registration failed: " + error.message);
      });
  });
};
const loginButton = document.getElementById("log");
if (loginButton) {
  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("lemail").value;
    const password = document.getElementById("lpassword").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
}
