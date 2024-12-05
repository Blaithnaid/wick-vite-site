
import {  initializeApp } from "firebase/app";
import { getfirestrore } from "firebase/firestore";


const firebaseConfig = {    
    apiKey: "AIzaSyD1J9Q",
    authDomain: "myapp.firebaseapp.com",
    projectId: "myapp",
    storageBucket: "myapp.appspot.com",
    messagingSenderId: "12345",
    appId: "1:12345:web:6789",
};

const app = initializeApp(firebaseConfig);
const firebase = getfirestrore(app);