import { Request, Response } from 'express';
import Product from '../models/productModel';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err: any) { // Explicitamente definir o tipo de err como any
    res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const product = new Product({
    id: req.body.id,
    imageSrc: req.body.imageSrc,
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
  } catch (err: any) { // Explicitamente definir o tipo de err como any
    res.status(400).json({ message: err.message });
  }
};
