// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM-6VLzutpzKKl9NBIE4VbdeRH784jrgI",
  authDomain: "inventario-pinturas.firebaseapp.com",
  projectId: "inventario-pinturas",
  storageBucket: "inventario-pinturas.appspot.com",
  messagingSenderId: "897870410045",
  appId: "1:897870410045:web:1bb5ea4897149220585554"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {db};

