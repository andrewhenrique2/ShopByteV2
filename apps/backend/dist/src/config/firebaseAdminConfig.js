"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucket = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const firebase_json_1 = __importDefault(require("../../secrets/firebase.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(firebase_json_1.default),
    storageBucket: "shopbyte-d1463.appspot.com"
});
const bucket = firebase_admin_1.default.storage().bucket();
exports.bucket = bucket;
//# sourceMappingURL=firebaseAdminConfig.js.map