import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvN2-YI3tQedibLhOz3akqygtAPJoytH4",
  authDomain: "medical-c19a4.firebaseapp.com",
  databaseURL: "https://medical-c19a4-default-rtdb.asia-southeast1.firebasedatabase.app/", // <-- Correct Database URL
  projectId: "medical-c19a4",
  storageBucket: "medical-c19a4.appspot.com",
  messagingSenderId: "1083734088000",
  appId: "1:1083734088000:web:4d782c75584aebb9aa02a5",
  measurementId: "G-EB5BQ30JQ2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set };


// explore.js
import { db, ref, set } from './firebaseConfig.js';  // Correct import path

async function likePlant(plant) {
  try {
    // Push the plant data to a new child node in Realtime Database
    const plantRef = ref(db, 'likedPlants/' + plant.name);  // Store data under 'likedPlants/plant_name'
    await set(plantRef, plant);
    alert("Plant saved to library!");
  } catch (error) {
    console.error("Error saving plant:", error);
  }
}

// Add event listener for the like buttons
document.querySelectorAll('.like-button').forEach(button => {
  button.addEventListener('click', () => {
    const plant = {
      name: button.dataset.name,
      uses: button.dataset.uses,
      species: button.dataset.species,
      origin: button.dataset.origin,
      image: button.dataset.image
    };
    likePlant(plant);
  });
});



