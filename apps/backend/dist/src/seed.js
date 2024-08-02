"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productModel_1 = __importDefault(require("./models/productModel"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const products = [
    {
        id: "Monitor-Gamer-SuperFrame-Vision",
        imageSrc: "/monitor.webp",
        imageAlt: "Monitor Gamer SuperFrame Vision, 24 Pol, Full HD, IPS, FreeSync, 1ms, 165Hz, HDMI/DP, SFV2409S",
        title: "Monitor Gamer SuperFrame Vision, 24 Pol, Full HD, IPS, FreeSync, 1ms, 165Hz, HDMI/DP, SFV2409S",
        oldPrice: "R$ 2.067,59 ",
        newPrice: "R$ 799,90",
        isOnPromotion: true,
        promotionEndTime: "2024-10-01T23:59:59Z",
        moreImages: ["/monitor.webp", "/monitor2.webp"],
    },
];
mongoose_1.default.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(async () => {
    console.log('Conectado ao MongoDB');
    await productModel_1.default.deleteMany({});
    await productModel_1.default.insertMany(products);
    console.log('Produtos inseridos');
    mongoose_1.default.connection.close();
})
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err.message));
//# sourceMappingURL=seed.js.map