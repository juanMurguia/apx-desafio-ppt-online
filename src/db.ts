import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

let API_BASE_URL: string;

// @ts-ignore
if (process.env.NODE_ENV == "production") {
  API_BASE_URL = "";
} else {
  API_BASE_URL = "http://localhost:3005";
}

const firebaseConfig = {
  apiKey: "AIzaSyA-o1L6Oc_oB3ZGxsiWXMpYf-U9EEu-c14",
  databaseURL: "https://desafio-nivel2-final-default-rtdb.firebaseio.com",
  projectId: "desafio-nivel2-final",
  authDomain: "desafio-nivel2-final.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);

export { API_BASE_URL, getDatabase, ref, onValue, app };
