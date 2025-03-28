
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  
  authDomain: "booknest-802d4.firebaseapp.com",
  projectId: "booknest-802d4",
  storageBucket: "booknest-802d4.firebasestorage.app",
  messagingSenderId: "871823112843",
  appId: "1:871823112843:web:196b9318df045fbf9e728e",
  measurementId: "G-LDDCQ21R9H"
};

const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
    isSupported().then((supported) => {
    if (supported) {
const analytics = getAnalytics(app);
    }
});
}

export const auth = getAuth(app)
export default app;
