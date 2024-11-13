
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOOAfh_Qs7QsV3p-hWiggcCRI3aNWNeF8",
  authDomain: "context-api-6e09d.firebaseapp.com",
  projectId: "context-api-6e09d",
  storageBucket: "context-api-6e09d.firebasestorage.app",
  messagingSenderId: "35873274451",
  appId: "1:35873274451:web:6a7adaf0db40530bc924a6",
  measurementId: "G-170CS4CSJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);