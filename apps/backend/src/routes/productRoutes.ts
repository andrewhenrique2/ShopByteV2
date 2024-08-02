import express from 'express';
import multer from 'multer';
import { createProductWithImage, getProducts } from '../controllers/productController';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getProducts);
router.post('/', upload.single('image'), createProductWithImage);

export default router;
