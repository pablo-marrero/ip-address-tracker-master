// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0zK5BNe419f5M2NsboFu5p0g2Xvdkcqc",
  authDomain: "ip-address-4fdfc.firebaseapp.com",
  projectId: "ip-address-4fdfc",
  storageBucket: "ip-address-4fdfc.appspot.com",
  messagingSenderId: "668618040381",
  appId: "1:668618040381:web:fada286bf8e5f310337654"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)