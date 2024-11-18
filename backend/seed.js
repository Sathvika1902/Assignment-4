const mongoose = require("mongoose");
const Product = require("./models/product"); // Adjust path if necessary

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";

const products = [
  {
    product_id: 1,
    product_name: "Fiction Book",
    description: "A fascinating fictional story.",
    price: 10.99,
    image_url: "/book_images/book_image_one.jpeg",
  },
  {
    product_id: 2,
    product_name: "Science Book",
    description: "Explore the mysteries of science.",
    price: 12.99,
    image_url: "/book_images/book_image_two.jpeg",
  },
  {
    product_id: 3,
    product_name: "Finance Book",
    description: "Learn about financial freedom.",
    price: 14.99,
    image_url: "/book_images/book_image_three.jpeg",
  },
  {
    product_id: 4,
    product_name: "Romance Book",
    description: "A heartwarming romantic tale.",
    price: 9.99,
    image_url: "/book_images/book_image_four.jpeg",
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    await Product.deleteMany(); // Clear existing data
    console.log("Existing products deleted.");

    await Product.insertMany(products);
    console.log("Dummy products added successfully.");

    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.disconnect();
  }
};

seedProducts();
