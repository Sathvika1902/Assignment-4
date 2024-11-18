import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="home-container text-center">
      {/* Welcome Section */}
      <h1>Welcome to the Book Store!</h1>
      <p>
        Discover an extensive collection of books across various genres. Log in
        or register to start shopping, save your favorites, and enjoy exclusive
        deals!
      </p>

      {/* Featured Categories */}
      <section className="featured-categories mt-5">
        <h2>Featured Categories</h2>
        <div className="categories d-flex justify-content-center mt-4">
          <div className="category-card mx-3 text-center">
            <img
              src="/book_images/book_image_one.jpeg"
              alt="Fiction"
              className="category-image rounded shadow-sm"
            />
            <h4 className="mt-2">Fiction</h4>
          </div>
          <div className="category-card mx-3 text-center">
            <img
              src="/book_images/book_image_two.jpeg"
              alt="Science"
              className="category-image rounded shadow-sm"
            />
            <h4 className="mt-2">Science</h4>
          </div>
          <div className="category-card mx-3 text-center">
            <img
              src="/book_images/book_image_three.jpeg"
              alt="Finance"
              className="category-image rounded shadow-sm"
            />
            <h4 className="mt-2">Finance</h4>
          </div>
          <div className="category-card mx-3 text-center">
            <img
              src="/book_images/book_image_four.jpeg"
              alt="Romance"
              className="category-image rounded shadow-sm"
            />
            <h4 className="mt-2">Romance</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta mt-5">
        <h2>Why Choose Us?</h2>
        <p>
          Whether you’re looking for bestsellers, academic references, or niche
          collections, our Book Store has it all. Sign up today and enjoy:
        </p>
        <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: '600px' }}>
          <li>
            <span role="img" aria-label="checkmark">✔️</span> Exclusive Member Discounts
          </li>
          <li>
            <span role="img" aria-label="checkmark">✔️</span> Personalized Recommendations
          </li>
          <li>
            <span role="img" aria-label="checkmark">✔️</span> Fast & Free Delivery on Orders Over $50
          </li>
        </ul>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate('/products')} // Navigate to Products page
        >
          Start Shopping
        </button>
      </section>

      {/* Testimonials */}
      <section className="testimonials mt-5">
        <h2>What Our Customers Say</h2>
        <div className="testimonial d-flex justify-content-center mt-4">
          <div className="testimonial-card mx-3 text-center p-3 rounded shadow-sm">
            <p>
              "I love the variety of books available here! I found everything I
              needed in one place."
            </p>
            <h5 className="mt-2">- Sarah L.</h5>
          </div>
          <div className="testimonial-card mx-3 text-center p-3 rounded shadow-sm">
            <p>
              "Amazing deals and great service! Highly recommend this Book
              Store."
            </p>
            <h5 className="mt-2">- John D.</h5>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
