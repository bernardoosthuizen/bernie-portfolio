import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
    authDomain: "myportfolio-1843e.firebaseapp.com",
    projectId: "myportfolio-1843e",
    storageBucket: "myportfolio-1843e.appspot.com",
    messagingSenderId: "829428564095",
    appId: "1:829428564095:web:dca0de433c936c3c10bf4a",
    measurementId: "G-75FGJ61DR6"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

