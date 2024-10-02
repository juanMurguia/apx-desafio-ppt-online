//import admin from "firebase-admin";
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import dotenv from 'dotenv'
import { getFirestore } from 'firebase/firestore';
dotenv.config()
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG!);
const databaseURL = process.env.DATABASE_URL.toString();


const app = initializeApp(
firebaseConfig
);

const firestore = getFirestore(app)
const rtdb = getDatabase(app);

export { firestore, rtdb };