import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAES8ADv67iUPTFlVKkhQC8MQgbz__3dTI",
    authDomain: "gamesource-ef983.firebaseapp.com",
    projectId: "gamesource-ef983",
    storageBucket: "gamesource-ef983.appspot.com",
    messagingSenderId: "717043237688",
    appId: "1:717043237688:web:0050743ed244c8f743b7cd",
    measurementId: "G-ENNJJ3QW78"
};

initializeApp(firebaseConfig)

const DB = getFirestore();
const AUTH = getAuth();

export { DB, AUTH }