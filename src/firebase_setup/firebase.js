// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0jQGRJwznJf_LOo7QOfRLGTxsig86hXE",
  authDomain: "happyshop-faad8.firebaseapp.com",
  projectId: "happyshop-faad8",
  storageBucket: "happyshop-faad8.appspot.com",
  messagingSenderId: "8754965641",
  appId: "1:8754965641:web:cecf8bae4991772c036a58",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const providerFaceBook = new FacebookAuthProvider();
const provider = new GoogleAuthProvider();
const providerTwitter = new TwitterAuthProvider();
const Auth = getAuth(app);
export { Auth, provider, providerFaceBook ,providerTwitter};
