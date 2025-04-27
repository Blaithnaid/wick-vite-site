import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBHuRAOylspqxJ_EIMnVG5AoNtRoNp86PU",
	authDomain: "wick-232f0.firebaseapp.com",
	projectId: "wick-232f0",
	storageBucket: "wick-232f0.firebasestorage.app",
	messagingSenderId: "73405681834",
	appId: "1:73405681834:web:7b7f6bc9a7c7219a7b40d3",
	measurementId: "G-EL9Z718383",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
