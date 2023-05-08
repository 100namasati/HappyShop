// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "myfirstfirebaseproject-4463c.firebaseapp.com",
  projectId: "myfirstfirebaseproject-4463c",
  storageBucket: "myfirstfirebaseproject-4463c.appspot.com",
  messagingSenderId: "1089450742638",
  appId: "1:1089450742638:web:3aea13347c139e949b277f",
  measurementId: "G-HRL0MVEW67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);