//import admin from "firebase-admin";
/*
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import dotenv from "dotenv";
import { getFirestore } from "firebase/firestore";
dotenv.config();
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG!);
const databaseURL = process.env.DATABASE_URL.toString();

const app = initializeApp(firebaseConfig);

const fireStore = getFirestore(app);
const rtdb = getDatabase(app);

export { fireStore, rtdb, app };*/

import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();
const databaseURL =
  process.env.DATABASE_URL ||
  "https://desafio-nivel2-final-default-rtdb.firebaseio.com";

const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_KEY_ID,
  private_key:
    process.env.NODE_ENV === "production"
      ? process.env.FIREBASE_PRIVATE_KEY
      : process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: process.env.FIREBASE_CLIENT_MAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_CERT,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT,
};

export const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: databaseURL,
});

const fireStore = admin.firestore();

const rtdb = admin.database();

export { fireStore, rtdb };
