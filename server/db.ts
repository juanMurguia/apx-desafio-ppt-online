import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();
const databaseURL =
  process.env.DATABASE_URL ||
  "https://desafio-nivel2-final-default-rtdb.firebaseio.com";

const serviceAccount: admin.ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID!,
  privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
  clientEmail: process.env.FIREBASE_CLIENT_MAIL!,
};

export const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL,
});

const fireStore = admin.firestore();

const rtdb = admin.database();

export { fireStore, rtdb };
