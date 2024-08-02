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
const mongoose_1 = __importDefault(require("mongoose"));
const productModel_1 = __importDefault(require("./models/productModel"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const products = [
    {
        id: "Monitor-Gamer-SuperFrame-Vision",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/monitor.webp",
        imageAlt: "Monitor Gamer SuperFrame Vision, 24 Pol, Full HD, IPS, FreeSync, 1ms, 165Hz, HDMI/DP, SFV2409S",
        title: "Monitor Gamer SuperFrame Vision, 24 Pol, Full HD, IPS, FreeSync, 1ms, 165Hz, HDMI/DP, SFV2409S",
        oldPrice: "R$ 2.067,59 ",
        newPrice: "R$ 799,90",
        isOnPromotion: true,
        promotionEndTime: "2024-10-01T23:59:59Z",
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/monitor.webp",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/monitor2.webp",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/monitor3.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/monitor4.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/monitor5.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/monitor6.jpg"
        ],
    },
    {
        id: "Gamer-T-Gamer",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/gabinete3.jpg",
        imageAlt: "Computador X-Home",
        title: "Computador X-Home Ryzen 5 5600X / NVIDIA GeForce RTX 3060 / 16GB DDR4 / SSD 480GB",
        oldPrice: "R$ 9.250,00",
        newPrice: "R$ 5.789,90",
        processor: "Ryzen 7 5700",
        memory: "16GB",
        storage: "SSD 1TB",
        additionalImages: ["https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/rtxbanner.webp"],
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/gabinete3.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/gamemax1.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/gamemax2.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/gamemax3.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/gamemax4.jpg"
        ],
    },
    {
        id: "RTX-3080-10GB",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/Gforce.webp",
        imageAlt: "GeForce RTX",
        title: "GeForce RTX 3080 10GB",
        oldPrice: "R$ 6.000,00",
        newPrice: "R$ 4.500,00",
        additionalImages: ["https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/rtxbanner.webp"],
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/Gforce.webp",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/plac.webp",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/plc2.webp",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/plc3.webp"
        ],
    },
    {
        id: "Teclado-Gamer-Mecânico-Akko-5075S",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/teclado.jpg",
        imageAlt: "Teclado Gamer Mecânico Akko 5075S Steam Engine, RGB, ABNT2, White, Switch Cream Yellow V3 Pro",
        title: "Teclado Gamer Mecânico Akko 5075S Steam Engine, RGB, ABNT2, White, Switch Cream Yellow V3 Pro",
        oldPrice: "R$ 779,99",
        newPrice: "R$ 529,90",
        isOnPromotion: true,
        promotionEndTime: "2024-11-01T23:59:59Z",
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/teclado.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/teclado2.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/teclado3.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/teclado4.jpg"
        ],
    },
    {
        id: "Notebook Gamer Gigabyte Aorus 15",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/not.jpg",
        imageAlt: "Notebook Gamer Gigabyte Aorus 15 Intel Core i5 12500H / RTX 4050 6GB / 8 GB DDR5 / SSD 512GB / Win 11 home / Preto, 9MF-E2BR383SH",
        title: "Notebook Gamer Gigabyte Aorus 15 Intel Core i5 12500H / RTX 4050 6GB / 8 GB DDR5 / SSD 512GB / Win 11 home / Preto, 9MF-E2BR383SH",
        oldPrice: "R$ 12.999,99 ",
        newPrice: "R$ 7.199,99",
        isOnPromotion: true,
        promotionEndTime: "2024-11-01T23:59:59Z",
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/not.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/not2.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/not3.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/not4.jpg"
        ],
        additionalImages: ["https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/rtxbanner.webp"],
    },
    {
        id: "Fonte Gigabyte Aorus AP1200PM",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fonte.webp",
        imageAlt: "Fonte Gigabyte Aorus AP1200PM",
        title: "Fonte Gigabyte Aorus AP1200PM 1200W, 80 PLUS Platinum, PFC Ativo, Full Modular, GP-AP1200PM",
        oldPrice: "R$ 3.259,90 ",
        newPrice: "R$ 2.180,00",
        additionalImages: ["https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/aorus.png"],
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fonte.webp",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fonte2.webp",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fonte3.webp",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fonte4.webp"
        ],
    },
    {
        id: "Monitor-Full-HD-144",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/monitor2.webp",
        imageAlt: "Monitor-144-1ms",
        title: "Monitor Full HD 1080P 144Hz 1ms",
        oldPrice: "R$ 1.500,00",
        newPrice: "R$ 600,00",
        isOnPromotion: true,
        promotionEndTime: "2024-08-01T23:59:59Z",
        additionalImages: ["https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/144.png"],
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/monitor2.webp",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/monitor5.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/monitor6.jpg"
        ],
    },
    {
        id: "Mousepad Gamer Force One",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/pad.jpg",
        imageAlt: "Mousepad Gamer Force One Skyhawk Fluxo Edition, 3XL (1200x550x3mm), FR.MP.SH.09",
        title: "Mousepad Gamer Force One Skyhawk Fluxo Edition, 3XL (1200x550x3mm), FR.MP.SH.09",
        oldPrice: "R$ 189,90",
        newPrice: "R$ 119,90",
        isOnPromotion: true,
        promotionEndTime: "2024-09-01T23:59:59Z",
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/pad.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/pad2.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/pad3.jpg"
        ],
    },
    {
        id: "Mouse Gamer SuperFrame Magnus",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/mouse1.jpg",
        imageAlt: "Mouse Gamer SuperFrame Magnus, RGB, Sensor PAW 3333, 19000 DPI, 7 Botões, Pink",
        title: "Mouse Gamer SuperFrame Magnus, RGB, Sensor PAW 3333, 19000 DPI, 7 Botões, Pink",
        oldPrice: "R$ 39,90",
        newPrice: "R$ 29,90",
        isOnPromotion: true,
        promotionEndTime: "2024-09-01T23:59:59Z",
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/mouse1.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/mouse2.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/mouse3.jpg"
        ],
    },
    {
        id: "Headset Gamer Fifine",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fone.jpg",
        imageAlt: "Headset Gamer Fifine SuperFrame Edition SFH6, 7.1 Surround, Drivers de 50mm, RGB, USB, White",
        title: "Headset Gamer Fifine SuperFrame Edition SFH6, 7.1 Surround, Drivers de 50mm, RGB, USB, White",
        oldPrice: "R$ 569,00",
        newPrice: "R$ 179,90",
        isOnPromotion: true,
        promotionEndTime: "2024-09-01T23:59:59Z",
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fone.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fone2.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fone3.jpg"
        ],
    },
    {
        id: "Cadeira Gamer SuperFrame",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/caidera.webp",
        imageAlt: "Cadeira Gamer SuperFrame Hybrid, Mesh, Altura Ajustável, Preta",
        title: "Cadeira Gamer SuperFrame Hybrid, Mesh, Altura Ajustável, Preta",
        oldPrice: "R$ 799,99",
        newPrice: "R$ 559,90",
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/caidera.webp",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/caidera2.webp",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/caidera3.webp"
        ],
    },
    {
        id: "Kit Fan Com 3 Unidades Gamer Ninja",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fa.jpg",
        imageAlt: "Cadeira Gamer SuperFrame Hybrid, Mesh, Altura Ajustável, Preta",
        title: "Kit Fan Com 3 Unidades Gamer Ninja Fuuton, ARGB, 120mm, Black",
        oldPrice: "R$ 249,99",
        newPrice: "R$ 79,90",
        moreImages: [
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fa.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fa2.jpg",
            "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/fa3.jpg"
        ],
    },
    {
        id: "Gabinetegamer",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/pc.jpg",
        imageAlt: "Gabinete Gamer",
        title: "Gabinete Gamer RGB",
        oldPrice: "R$ 500,00",
        newPrice: "R$ 450,00",
    },
    {
        id: "Ryzen-7-5800X",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/ryzen7.jpg",
        imageAlt: "Ryzen 7 5800X",
        title: "AMD Ryzen 7 5800X",
        oldPrice: "R$ 2.500,00",
        newPrice: "R$ 2.300,00",
    },
    {
        id: "intelcorei7",
        imageSrc: "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/intel.jpg",
        imageAlt: "Intel Core i7",
        title: "Intel Core i7 12700K",
        oldPrice: "R$ 3.200,00",
        newPrice: "R$ 3.000,00",
    },
];
mongoose_1.default.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Conectado ao MongoDB');
    yield productModel_1.default.deleteMany({});
    yield productModel_1.default.insertMany(products);
    console.log('Produtos inseridos');
    mongoose_1.default.connection.close();
}))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err.message));
