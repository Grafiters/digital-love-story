import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA_3MyTGNb6fwH2pZsQhdf_K4KE9-wLMM",
  authDomain: "fireapi-2ac00.firebaseapp.com",
  databaseURL: "https://fireapi-2ac00.firebaseio.com",
  projectId: "fireapi-2ac00",
  storageBucket: "fireapi-2ac00.firebasestorage.app",
  messagingSenderId: "7767809519",
  appId: "1:7767809519:web:ee321c56f08e08e63d2a1a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
