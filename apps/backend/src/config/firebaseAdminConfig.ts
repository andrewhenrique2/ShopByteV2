import admin from 'firebase-admin';
import serviceAccount from '../../secrets/firebase.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: "shopbyte-d1463.appspot.com"
});

const bucket = admin.storage().bucket();

export { bucket };
