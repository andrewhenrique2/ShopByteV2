import { Request, Response } from 'express';
import Product from '../models/productModel';
import { bucket } from '../config/firebaseAdminConfig';
import { v4 as uuidv4 } from 'uuid';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createProductWithImage = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const blob = bucket.file(`public_images/${uuidv4()}_${req.file.originalname}`);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  blobStream.on('error', (err) => res.status(500).send(err.toString()));

  blobStream.on('finish', async () => {
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    const product = new Product({
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
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  });

  blobStream.end(req.file.buffer);
};
