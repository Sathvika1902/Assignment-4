const Cart = require('../models/Cart');
const Product = require('../models/Product'); // Assuming you have a Product model

const getUserCart = async (req, res) => {
  const { user_id } = req.params;

  try {
    let cart = await Cart.findOne({ user_id });

    // Create a new cart if it doesn't exist
    if (!cart) {
      cart = new Cart({ user_id, product_details: [], total_price: 0 });
      await cart.save();
    }

    // Enrich product_details with product info from Product collection
    const enrichedProductDetails = await Promise.all(
      cart.product_details.map(async (item) => {
        const product = await Product.findOne({ product_id: item.product_id });
        return {
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price,
          image_url: product?.image_url || '', // Add image_url if product exists
          product_name: product?.product_name || 'Unknown Product', // Add product_name if product exists
        };
      })
    );

    const enrichedCart = {
      ...cart.toObject(),
      product_details: enrichedProductDetails, // Replace product_details with enriched data
    };

    res.status(200).json(enrichedCart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart.', error });
  }
};

const addToCart = async (req, res) => {
  const { user_id, product_id, quantity, price } = req.body;

  // Validate input
  if (!user_id || typeof product_id !== 'number' || typeof quantity !== 'number' || quantity <= 0) {
    return res.status(400).json({
      message: 'Invalid request. Ensure user_id, product_id (number), and a valid quantity are provided.',
    });
  }

  try {

    // Fetch or create the cart
    let cart = await Cart.findOne({ user_id });
    if (!cart) {
      cart = new Cart({ user_id, product_details: [] });
    }

    // Check if the product already exists in the cart
    const existingProduct = cart.product_details.find((p) => p.product_id === product_id);

    if (existingProduct) {
      // Update quantity
      existingProduct.quantity += quantity;
    } else {
      // Add new product to the cart
      cart.product_details.push({ product_id, price, quantity });
    }

    // Recalculate total price
    cart.total_price = cart.product_details.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Save the updated cart
    const updatedCart = await cart.save();
    res.status(200).json({ message: 'Cart updated.', cart: updatedCart });
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart.', error });
  }
};


// Delete cart (checkout or clear)
const deleteCart = async (req, res) => {
  const { user_id } = req.params;

  try {
    const deletedCart = await Cart.findOneAndDelete({ user_id });
    if (!deletedCart) return res.status(404).json({ message: 'Cart not found.' });

    res.status(200).json({ message: 'Cart deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting cart.', error });
  }
};

// Delete a single product from the cart
const deleteProductFromCart = async (req, res) => {
  const { user_id, product_id } = req.params;

  try {
    const cart = await Cart.findOne({ user_id });
    if (!cart) return res.status(404).json({ message: 'Cart not found.' });

    // Remove the product from the cart
    cart.product_details = cart.product_details.filter((item) => item.product_id !== parseInt(product_id));

    // Recalculate total price
    cart.total_price = cart.product_details.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Save the updated cart
    const updatedCart = await cart.save();
    res.status(200).json({ message: 'Product removed from cart.', cart: updatedCart });
  } catch (error) {
    res.status(500).json({ message: 'Error removing product from cart.', error });
  }
};

module.exports = { getUserCart, addToCart, deleteCart, deleteProductFromCart };