import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApskjPL-zv7abuMJg0c2IgNcSkQZZ3awI",
  authDomain: "ai-med-analyzer-49.firebaseapp.com",
  projectId: "ai-med-analyzer-49",
  storageBucket: "ai-med-analyzer-49.appspot.com",
  messagingSenderId: "929815057942",
  appId: "1:929815057942:web:ab7377261b6d0f88334737",
  measurementId: "G-JT5DBCMHMB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
