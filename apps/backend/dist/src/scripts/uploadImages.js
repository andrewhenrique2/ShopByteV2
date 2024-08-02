"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Inicializar o Firebase Admin
const serviceAccount = require('../secrets/firebase.json'); // Ajuste o caminho conforme necessário
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    storageBucket: "shopbyte-d1463.appspot.com" // Substitua pelo seu bucket
});
const bucket = firebase_admin_1.default.storage().bucket();
// Diretório com as imagens
const imageDir = path_1.default.join(__dirname, '../public/images');
// Função para fazer upload de uma imagem
const uploadImage = async (filePath) => {
    const fileName = path_1.default.basename(filePath);
    const destination = `products/${fileName}`;
    const metadata = {
        contentType: 'image/jpeg', // Ajuste conforme o tipo de suas imagens
    };
    await bucket.upload(filePath, {
        destination,
        metadata,
    });
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${destination}`;
    console.log(`Uploaded ${fileName} to ${publicUrl}`);
};
// Fazer upload de todas as imagens no diretório
fs_1.default.readdir(imageDir, (err, files) => {
    if (err) {
        console.error('Erro ao ler o diretório de imagens:', err);
        return;
    }
    files.forEach(file => {
        const filePath = path_1.default.join(imageDir, file);
        uploadImage(filePath).catch(console.error);
    });
});
//# sourceMappingURL=uploadImages.js.map