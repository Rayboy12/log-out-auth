// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2qB8M8E2kAU8bBZFG4AjWW7qtdCxTuHw",
  authDomain: "mood-meter-70e1e.firebaseapp.com",
  projectId: "mood-meter-70e1e",
  storageBucket: "mood-meter-70e1e.appspot.com",
  messagingSenderId: "957059628605",
  appId: "1:957059628605:web:3799d6302986c1bac9f454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ambil auth dari firebase di sini sekali aja biar bisa dipakai berkali-kali
const auth = getAuth(app);

//diexport
export { auth };