const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const wishlistSchema = new mongoose.Schema({
  wishlist_id: { type: Number, unique: true }, // Auto-incremented ID
  user_id: { type: Number, required: true }, // Reference to User ID
  product_details: [
    {
      product_id: { type: Number, required: true }, // Reference to Product ID
      price: { type: Number, required: true }, // Price of the product when added
      quantity: { type: Number, required: true }, // Desired quantity for purchase
    },
  ],
  last_updated_timestamp: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
});

// Add auto-increment plugin for wishlist_id
wishlistSchema.plugin(AutoIncrement, { inc_field: 'wishlist_id' });

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
module.exports = Wishlist;