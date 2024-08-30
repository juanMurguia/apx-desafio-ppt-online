import admin from "firebase-admin";
import dotenv from 'dotenv'
dotenv.config()
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG!);


admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL: "https://your-project-id.firebaseio.com"
});

const firestore = admin.firestore();
const rtdb = admin.database();

export { firestore, rtdb };