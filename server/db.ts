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
  project_id: "desafio-nivel2-final",
  private_key_id: "4e57b66229525e650fe0b8eb30fa1fdb89561dab",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDEeT6fBDdWVan\nhQl4hXkuIyv/LTO6rIHil42PajWOryO0LxFUHBLO0KhsoUTJkw59pCbczr3nd9pz\nBe0OMvb5hx5lPFFECI1Gt9InCn5haDENFAf1SXrAy5UPAcJDLJyH1Yvfg3sQ/gqG\ndV/Ymo1GQ0PIQEdr+mM7+jXNJBWRuSeWJI+d8sPeeIEatc6mM8aLcN27vzflcXJo\nuouVO/Q5jt4VtlNcnJ8k+mIeQFrWrnlbVXrnnlWFBLYkGVwCC5SV5JxvY/t0wjij\n9s9oIR0WZPB4FaOfPKJ9ZObBE0uHKZSksRKSPtg8o6uxJbbKTMUlfojxExqJwyji\nzcS+nyZtAgMBAAECggEAHJGtGbNca/Km4ot1LuHLdOKhUbLO0e7saeF80c2CEQbd\nAYloLgubhI8iL6Cx2JzRQTzulSWxQep3g6ORS6RSsApmPPjnxQFEoaAP5vheOIlg\nL7RokvfDQuO+Da/aAekRdsJjhSV2O2+dXoJnumsuOCVnUrd5TlriODlFsmjvwMLd\nvwn4qAmgKhv3LJ2OrjEDwQuqstvlo9hgdkiqbYSlM6UcxM+hb+b/pjD/AmAxrLC7\niDXY4c9uTcyhMTWLYLxQepD6+H5ZyUlfiFwRMyrD5NRuaMHVpM4WVRUZZVTFMTtH\nUIBmHImOWNmMoY8OuYBZ13bbWMFlEYna+l7uKB4rAQKBgQD2oE+MPmN3EGXoMLJA\nObYPzNlQOUm9ERCb58QI5PoyPYb+kxAu36R/EI1YWy3enQizH3zC+YZEaXAfQena\ngPo/6Z2MoUDpn5H9eSfHAvsK1z67kDCDuzWA8K8VkCVS7c3eXFNG85cD9nATw9LD\naZAm4pJLPkIjRBZ6MTZxUBE5AQKBgQDKe+/5Ds3faX9c6F4O66tG5VWiXbWr6X64\nyZKgbB9b5DfRRREunaTBYlYU+WBuc9IVSipsmv9HfdOniZwadToh6d6x73stolkk\ntdMhx7iQIj3x0mlI3ikeyNzueL6x91RZdwd6BRixXtDBhmuUucjKkVhb7Xy4zylg\nxgK31DDhbQKBgF1uhjRfPldRAwpfyGfEdVCvDnTx/xl9aYlm2EF2XcLCxG2VUUAw\nwaTRpHqgsFPxseYKO72xwkgQmcV9txZsXmHwIxuvy2O2bBxW1dbzLiABQ2bTTU3a\nkn5ysCG/JiSwqple6L2scr2xkuwp96LITzAsDbgrseqiVNGd6z4qUxwBAoGBALOi\nIjHlJVVHhZtJ9m/sOaYKvN7vncVmv2p2QWOaqHNgUviP+n9NkaWSdOXkmt1CWSVU\nB7EUDNdC1Ku0VE3QpAMENPHMkI3akpUTzbwRMDaGekf3sDnaBcbu0bmqWxsNXcKE\n65gfv1lT0YVumDB4ZZ74NNhRJy3Zc08MO8sUL009AoGAehvWrsAhEVasCs4eSXqT\nYi0GgmcLNtDEIYQS1xsJSEjp2fNZ4edxTCrXtJFnGgkWltz3v+RJK1bsRJpsmkuZ\n9OdixhwWZAPBpzHqEUWAhJr/JpNAPv5YQ2uM9GHvawwYlO6UR6l0qgaG9T0K6pi3\nM3pQMBhIjnkKezBQ2a6y85A=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-4wvjk@desafio-nivel2-final.iam.gserviceaccount.com",
  client_id: "114962804581193452286",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4wvjk%40desafio-nivel2-final.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

export const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: databaseURL,
});

const fireStore = admin.firestore();

const rtdb = admin.database();

export { fireStore, rtdb };
