"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true },
    imageSrc: String,
    imageAlt: String,
    title: String,
    oldPrice: String,
    newPrice: String,
    isOnPromotion: Boolean,
    promotionEndTime: Date,
    processor: String,
    memory: String,
    storage: String,
    additionalImages: [String],
    moreImages: [String],
});
const Product = mongoose_1.default.model('Product', productSchema);
exports.default = Product;
//# sourceMappingURL=productModel.js.map