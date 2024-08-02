import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
const mongoUri = process.env.MONGODB_URI as string;
if (!mongoUri) {
  console.error('Erro: MONGODB_URI não está definido no arquivo .env');
  process.exit(1);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err: Error) => console.error('Erro ao conectar ao MongoDB:', err.message));

// Usar as rotas de produtos
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
