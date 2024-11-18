const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose); // Use if you prefer auto-increment plugin

const productSchema = new mongoose.Schema({
  product_id: { type: Number, unique: true }, // Auto-incremented ID
  product_name: { type: String, required: true },
  description: { type: String, required: true }, // New description field
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  added_date: { type: Date, default: Date.now },
  image_url: { type: String, required: true },
});

// Add auto-increment plugin for product_id
productSchema.plugin(AutoIncrement, { inc_field: 'product_id' });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;