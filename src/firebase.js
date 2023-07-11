import firebase from 'firebase/app'
import 'firebase/firestore'  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKO5symJam41Db72NVdBo5MMRKMI-emDY",
  authDomain: "react-hooks-blog-52360.firebaseapp.com",
  projectId: "react-hooks-blog-52360",
  storageBucket: "react-hooks-blog-52360.appspot.com",
  messagingSenderId: "858083642488",
  appId: "1:858083642488:web:2fff666853432c47f4b18d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();