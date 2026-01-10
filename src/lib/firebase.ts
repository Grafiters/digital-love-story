import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3DZSOmHrbcZ29igrWDsHWwgi6sxJSV-Y",
  authDomain: "cloud-online-3bcd0.firebaseapp.com",
  projectId: "cloud-online-3bcd0",
  storageBucket: "cloud-online-3bcd0.firebasestorage.app",
  messagingSenderId: "85595774901",
  appId: "1:85595774901:web:339437706f2471d69303fc",
  measurementId: "G-G2PGJXSR4E"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
