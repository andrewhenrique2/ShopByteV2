const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    imageUrl: String, // URL da imagem armazenada no Firebase Storage
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
//# sourceMappingURL=Product.js.map