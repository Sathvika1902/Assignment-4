const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const cartSchema = new mongoose.Schema({
  cart_id: { type: Number, unique: true }, // Auto-incremented ID
  user_id: { type: Number, required: true }, // Reference to User ID
  product_details: [
    {
      product_id: { type: Number, required: true }, // Reference to Product ID
      price: { type: Number, required: true }, // Price of the product at the time it was added
      quantity: { type: Number, required: true }, // Quantity of the product in the cart
    },
  ],
  total_price: { type: Number, default: 0 }, // Sum of (price * quantity) for all products
  last_updated_timestamp: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
});

// Add auto-increment plugin for cart_id
cartSchema.plugin(AutoIncrement, { inc_field: 'cart_id' });

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;