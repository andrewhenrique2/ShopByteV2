"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductWithImage = exports.getProducts = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const firebaseAdminConfig_1 = require("../config/firebaseAdminConfig");
const uuid_1 = require("uuid");
const getProducts = async (req, res) => {
    try {
        const products = await productModel_1.default.find();
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getProducts = getProducts;
const createProductWithImage = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const blob = firebaseAdminConfig_1.bucket.file(`products/${(0, uuid_1.v4)()}_${req.file.originalname}`);
    const blobStream = blob.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        }
    });
    blobStream.on('error', (err) => res.status(500).send(err.toString()));
    blobStream.on('finish', async () => {
        const publicUrl = `https://storage.googleapis.com/${firebaseAdminConfig_1.bucket.name}/${blob.name}`;
        const product = new productModel_1.default({
            id: req.body.id,
            imageSrc: publicUrl,
            imageAlt: req.body.imageAlt,
            title: req.body.title,
            oldPrice: req.body.oldPrice,
            newPrice: req.body.newPrice,
            isOnPromotion: req.body.isOnPromotion,
            promotionEndTime: req.body.promotionEndTime,
            processor: req.body.processor,
            memory: req.body.memory,
            storage: req.body.storage,
            additionalImages: req.body.additionalImages,
            moreImages: req.body.moreImages,
        });
        try {
            const newProduct = await product.save();
            res.status(201).json(newProduct);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    });
    blobStream.end(req.file.buffer);
};
exports.createProductWithImage = createProductWithImage;
//# sourceMappingURL=productController.js.map