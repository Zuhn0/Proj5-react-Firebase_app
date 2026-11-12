// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTwItmZVLZfbSCoaSUqHL6bTiMD39-dGU",
  authDomain: "vite-contact-bcfb5.firebaseapp.com",
  projectId: "vite-contact-bcfb5",
  storageBucket: "vite-contact-bcfb5.firebasestorage.app",
  messagingSenderId: "320029969489",
  appId: "1:320029969489:web:adb6c0948d05bbfe64bc70"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);