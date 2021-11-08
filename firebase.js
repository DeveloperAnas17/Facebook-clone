import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATF-ZBrZiT4dC6GjuKCWEqFg2C_WERpzI",
  authDomain: "facebook-clone-ebf73.firebaseapp.com",
  projectId: "facebook-clone-ebf73",
  storageBucket: "facebook-clone-ebf73.appspot.com",
  messagingSenderId: "202191044433",
  appId: "1:202191044433:web:9fc7b2662572761a7c9d70",
  measurementId: "G-Y08XKV0NY5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export { db };
