import mongoose from 'mongoose';
import Product from './models/productModel';
import dotenv from 'dotenv';

dotenv.config();

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

mongoose.connect(process.env.MONGODB_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Conectado ao MongoDB');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Produtos inseridos');
    mongoose.connection.close();
  })
  .catch((err: Error) => console.error('Erro ao conectar ao MongoDB:', err.message));
