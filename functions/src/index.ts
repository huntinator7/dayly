import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const db = admin.firestore();

export const onUserCreate = functions.auth.user().onCreate((user) => {
  db.collection("User")
    .doc(user.uid)
    .set({
      uid: user.uid,
      initialDate: new Date(),
      dailyTasks: [],
    })
    .then(() => {
      db.collection("User").doc(user.uid).collection("Day").doc("1").set({
        tasks: [],
      });
    });
});
