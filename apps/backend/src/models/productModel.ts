import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
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

const Product = mongoose.model('Product', productSchema);

export default Product;
