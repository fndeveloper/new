// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf2nfOINIMor0or-r7ricZ06qt-H18XUw",
  authDomain: "mamdaisy-24a4b.firebaseapp.com",
  projectId: "mamdaisy-24a4b",
  storageBucket: "mamdaisy-24a4b.firebasestorage.app",
  messagingSenderId: "689045411991",
  appId: "1:689045411991:web:b29221a98143da3ebbf1d2",
  measurementId: "G-HQ2Q03V6NH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
