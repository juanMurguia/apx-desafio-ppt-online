import * as firebase from "firebase-admin";


const serviceAccount = require('./desafio-nivel2-final-firebase-adminsdk-4wvjk-ebc2f1f487.json'); // Asegúrate de descargar tu archivo de clave privada desde Firebase Console

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://desafio-nivel2-final-default-rtdb.firebaseio.com"
});

const firestore = firebase.firestore();

const rtdb = firebase.database();

export { firestore, rtdb };