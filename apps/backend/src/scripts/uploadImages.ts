import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

// Inicializar o Firebase Admin
const serviceAccount = require('../secrets/firebase.json'); // Ajuste o caminho conforme necessário
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "shopbyte-d1463.appspot.com" // Substitua pelo seu bucket correto
});

const bucket = admin.storage().bucket();

// Diretório com as imagens
const imageDir = path.join(__dirname, '../../public');

// Função para fazer upload de uma imagem
const uploadImage = async (filePath: string) => {
  const fileName = path.basename(filePath);
  const destination = `public_images/${fileName}`;  // Pasta no Storage onde as imagens serão armazenadas
  const contentType = path.extname(fileName) === '.jpg' ? 'image/jpeg' :
                     path.extname(fileName) === '.png' ? 'image/png' :
                     path.extname(fileName) === '.webp' ? 'image/webp' : 'application/octet-stream';

  const metadata = {
    contentType: contentType,
  };

  await bucket.upload(filePath, {
    destination,
    metadata,
  });

  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${destination}`;
  console.log(`Uploaded ${fileName} to ${publicUrl}`);
};

// Fazer upload de todas as imagens no diretório
fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('Erro ao ler o diretório de imagens:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(imageDir, file);
    uploadImage(filePath).catch(console.error);
  });
});
