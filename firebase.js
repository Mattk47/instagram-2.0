// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmp0md_w3j4ljcsCGbm_EZEh6Jxw1Zvug",
    authDomain: "instagram-2-c9bf8.firebaseapp.com",
    projectId: "instagram-2-c9bf8",
    storageBucket: "instagram-2-c9bf8.appspot.com",
    messagingSenderId: "148529245309",
    appId: "1:148529245309:web:1082fc8e0c8a2d1a385514",
    measurementId: "G-8D9D9X40YF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };