const Product = require('../models/Product');

// Fetch all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products.', error });
  }
};

// Fetch product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ product_id: id });
    if (!product) return res.status(404).json({ message: 'Product not found.' });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product.', error });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { product_name, description, quantity, price, image_url } = req.body;

  try {
    const newProduct = new Product({
      product_name,
      description,
      quantity,
      price,
      image_url,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({ message: 'Product created successfully.', product: savedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product.', error });
  }
};

// Update product details
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { product_name, description, quantity, price, image_url } = req.body;

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { product_id: id },
      { product_name, description, quantity, price, image_url },
      { new: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: 'Product not found.' });

    res.status(200).json({ message: 'Product updated successfully.', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product.', error });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findOneAndDelete({ product_id: id });
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found.' });

    res.status(200).json({ message: 'Product deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product.', error });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};