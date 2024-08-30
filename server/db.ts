import admin from "firebase-admin";
<<<<<<< HEAD
import serviceAccount from "./desafio-nivel2-final-firebase-adminsdk-4wvjk-ebc2f1f487.json" assert { type: "json" };
=======
import serviceAccount from "../desafio-nivel2-final-firebase-adminsdk-4wvjk-ebc2f1f487.json" assert { type: "json" };
>>>>>>> 1614228e0e978108bf7fb3586d07bb3b525746ae

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
    databaseURL: "https://your-project-id.firebaseio.com"
});

const firestore = admin.firestore();
const rtdb = admin.database();

export { firestore, rtdb };