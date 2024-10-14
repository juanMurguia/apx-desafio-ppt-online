import admin, { ServiceAccount } from "firebase-admin";
import dotenv from "dotenv";
import serviceAccount from "../desafio-nivel2-final-firebase-adminsdk-4wvjk-37c46c20bf.json" assert { type: "json" };

dotenv.config();
const databaseURL =
  process.env.DATABASE_URL ||
  "https://desafio-nivel2-final-default-rtdb.firebaseio.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: process.env.DATABASE_URL,
});

const fireStore = admin.firestore();

const rtdb = admin.database();

export { fireStore, rtdb };
