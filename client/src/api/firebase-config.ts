// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2n2P6Hbz7z45FYbJWPsyLrU8ni-CkYSs",
  authDomain: "rv-scholars-website.firebaseapp.com",
  projectId: "rv-scholars-website",
  storageBucket: "rv-scholars-website.appspot.com",
  messagingSenderId: "738451772544",
  appId: "1:738451772544:web:f5fabefc4932661e764265",
  measurementId: "G-KBGN2BMQXK"
};

// Initialize Firebase
export const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
