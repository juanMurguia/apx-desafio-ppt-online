import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();
const databaseURL = process.env.DATABASE_URL ||
    "https://desafio-nivel2-final-default-rtdb.firebaseio.com";
const serviceAccount = {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY
        ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n") // Reemplaza \n por saltos de línea reales
        : undefined,
    client_email: process.env.FIREBASE_CLIENT_MAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_CERT,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT,
};
console.log(serviceAccount);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL,
});
const fireStore = admin.firestore();
const rtdb = admin.database();
export { fireStore, rtdb };
