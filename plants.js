import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvN2-YI3tQedibLhOz3akqygtAPJoytH4",
  authDomain: "medical-c19a4.firebaseapp.com",
  databaseURL: "https://medical-c19a4-default-rtdb.asia-southeast1.firebasedatabase.app/", // <-- Add your Realtime Database URL
  projectId: "medical-c19a4",
  storageBucket: "medical-c19a4.appspot.com",
  messagingSenderId: "1083734088000",
  appId: "1:1083734088000:web:4d782c75584aebb9aa02a5",
  measurementId: "G-EB5BQ30JQ2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, child };

import { db, ref, get, child } from './firebaseConfig.js';

async function loadLikedPlants() {
  try {
    const plantsRef = ref(db, 'likedPlants');
    const snapshot = await get(plantsRef);
    const container = document.getElementById("plant-library");

    if (snapshot.exists()) {
      container.innerHTML = ""; // Clear existing content
      snapshot.forEach((childSnapshot) => {
        const plant = childSnapshot.val();
        const card = document.createElement("div");
        card.className = "plant-card";
        card.innerHTML = `
          <img src="${plant.image}" alt="${plant.name}" />
          <h3>${plant.name}</h3>
          <p><strong>Uses:</strong> ${plant.uses}</p>
          <p><strong>Species:</strong> ${plant.species}</p>
          <p><strong>Origin:</strong> ${plant.origin}</p>
        `;
        container.appendChild(card);
      });
    } else {
      container.innerHTML = "<p>No liked plants found.</p>";
    }
  } catch (error) {
    console.error("Error loading plants:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadLikedPlants);