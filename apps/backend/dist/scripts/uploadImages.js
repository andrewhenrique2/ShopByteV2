"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    storageBucket: "shopbyte-d1463.appspot.com" // Substitua pelo seu bucket correto
});
const bucket = firebase_admin_1.default.storage().bucket();
// Diretório com as imagens
const imageDir = path_1.default.join(__dirname, '../../public');
// Função para fazer upload de uma imagem
const uploadImage = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    const fileName = path_1.default.basename(filePath);
    const destination = `public_images/${fileName}`; // Pasta no Storage onde as imagens serão armazenadas
    const contentType = path_1.default.extname(fileName) === '.jpg' ? 'image/jpeg' :
        path_1.default.extname(fileName) === '.png' ? 'image/png' :
            path_1.default.extname(fileName) === '.webp' ? 'image/webp' : 'application/octet-stream';
    const metadata = {
        contentType: contentType,
    };
    yield bucket.upload(filePath, {
        destination,
        metadata,
    });
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${destination}`;
    console.log(`Uploaded ${fileName} to ${publicUrl}`);
});
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
