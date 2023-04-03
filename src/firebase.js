import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBdMFeWB_fQGh3PHJcFl38fGJ1ASC5uiUo",
  authDomain: "belen-ecommerce.firebaseapp.com",
  projectId: "belen-ecommerce",
  storageBucket: "belen-ecommerce.appspot.com",
  messagingSenderId: "591550370623",
  appId: "1:591550370623:web:f1bc5d9501776f80a0398a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseConection = ()=> app
export const db = getFirestore()
