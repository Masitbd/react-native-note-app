import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDpTfHmNlrxpuooa2KVyMO9J2H7w1nQ1g",
    authDomain: "react-native-note-app-4fd92.firebaseapp.com",
    projectId: "react-native-note-app-4fd92",
    storageBucket: "react-native-note-app-4fd92.appspot.com",
    messagingSenderId: "308090357770",
    appId: "1:308090357770:web:147093c909f06438ddf7f3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app)