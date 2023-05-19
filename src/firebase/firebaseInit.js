// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBu4DN6mh7Z6fK7O2LrXJKURMaXLItrsYs",
  authDomain: "pinturas-6c0b0.firebaseapp.com",
  projectId: "pinturas-6c0b0",
  storageBucket: "pinturas-6c0b0.appspot.com",
  messagingSenderId: "115088167475",
  appId: "1:115088167475:web:48187a9b71a5d618a68946"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {db};

