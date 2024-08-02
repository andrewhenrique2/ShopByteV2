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
const serviceAccount = require('../../secrets/firebase.json');
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    storageBucket: 'shopbyte-d1463.appspot.com',
});
const bucket = firebase_admin_1.default.storage().bucket();
const makeFilesPublic = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [files] = yield bucket.getFiles({ prefix: 'public_images/' });
        for (const file of files) {
            yield file.makePublic();
            console.log(`Made ${file.name} public`);
        }
    }
    catch (error) {
        console.error('Error making files public:', error);
    }
});
makeFilesPublic();
