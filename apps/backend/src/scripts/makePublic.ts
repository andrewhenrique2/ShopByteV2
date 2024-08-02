import admin from 'firebase-admin';
import path from 'path';

const serviceAccount = require('../../secrets/firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'shopbyte-d1463.appspot.com',
});

const bucket = admin.storage().bucket();

const makeFilesPublic = async () => {
  try {
    const [files] = await bucket.getFiles({ prefix: 'public_images/' });

    for (const file of files) {
      await file.makePublic();
      console.log(`Made ${file.name} public`);
    }
  } catch (error) {
    console.error('Error making files public:', error);
  }
};

makeFilesPublic();
