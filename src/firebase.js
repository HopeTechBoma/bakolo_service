// src/firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCX8Oqf-mCMXYu1IqEv8hOo8FqhqkT9ELA",
    authDomain: "bakolo.firebaseapp.com",
    projectId: "bakolo",
    storageBucket: "bakolo.appspot.com",
    messagingSenderId: "626460215114",
    appId: "1:626460215114:web:31493dc66fbdf5999423b3",
    measurementId: "G-8NZ2TLEQLL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

