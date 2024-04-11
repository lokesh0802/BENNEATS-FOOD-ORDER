// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_SOME_KEY)

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyAWps90lpcfGNzrfqslnz-uUvPJ6biQd8A",
  authDomain: "benneats-fa9ab.firebaseapp.com",
  projectId: "benneats-fa9ab",
  storageBucket: "benneats-fa9ab.appspot.com",
  messagingSenderId: "63721384133",
  appId: "1:63721384133:web:64c77ef6febd4da17928ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

