const Wishlist = require('../models/Wishlist');
const Product = require('../models/Product'); // Import the Product model

// Fetch user's wishlist
const getUserWishlist = async (req, res) => {
  const { user_id } = req.params;

  try {
    // Check if a wishlist exists
    let wishlist = await Wishlist.findOne({ user_id });

    // Create a new wishlist if it doesn't exist
    if (!wishlist) {
      wishlist = new Wishlist({ user_id, product_details: [] });
      await wishlist.save();
    }

    // Enrich product_details with product info from the Product collection
    const enrichedProductDetails = await Promise.all(
      wishlist.product_details.map(async (item) => {
        const product = await Product.findOne({ product_id: item.product_id });
        return {
          product_id: item.product_id,
          price: item.price,
          quantity: item.quantity,
          image_url: product?.image_url || '', // Add image_url if product exists
          product_name: product?.product_name || 'Unknown Product', // Add product_name if product exists
        };
      })
    );

    const enrichedWishlist = {
      ...wishlist.toObject(),
      product_details: enrichedProductDetails, // Replace product_details with enriched data
    };

    res.status(200).json(enrichedWishlist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching wishlist.', error });
  }
};

// Add or update product in wishlist
const addToWishlist = async (req, res) => {
  const { user_id, product_id, price, quantity } = req.body;

  try {
    // Check if wishlist exists for the user
    let wishlist = await Wishlist.findOne({ user_id });
    if (!wishlist) {
      wishlist = new Wishlist({ user_id, product_details: [] });
    }

    // Check if the product already exists in the wishlist
    const existingProduct = wishlist.product_details.find((p) => p.product_id === product_id);
    if (existingProduct) {
      existingProduct.quantity += quantity; // Increment quantity
      existingProduct.price = price; // Update price
    } else {
      // Add new product to the wishlist
      wishlist.product_details.push({ product_id, price, quantity });
    }

    // Save the updated wishlist
    const updatedWishlist = await wishlist.save();
    res.status(200).json({ message: 'Wishlist updated successfully.', wishlist: updatedWishlist });
  } catch (error) {
    res.status(500).json({ message: 'Error updating wishlist.', error });
  }
};

const removeFromWishlist = async (req, res) => {
  const { user_id, product_id } = req.params;

  try {
    // Find the user's wishlist
    const wishlist = await Wishlist.findOne({ user_id });
    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found.' });

    // Convert product_id from req.params to a Number
    const productIdToRemove = parseInt(product_id, 10);

    // Remove the specified product from the wishlist
    wishlist.product_details = wishlist.product_details.filter(
      (p) => p.product_id !== productIdToRemove
    );

    // Save the updated wishlist
    const updatedWishlist = await wishlist.save();
    res.status(200).json({ message: 'Product removed from wishlist.', wishlist: updatedWishlist });
  } catch (error) {
    res.status(500).json({ message: 'Error removing product from wishlist.', error });
  }
};

module.exports = { getUserWishlist, addToWishlist, removeFromWishlist };