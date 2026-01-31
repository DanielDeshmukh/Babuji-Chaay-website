import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("hot-beverages");

  const categories = Object.keys(products);

  return (
    <main className="pt-24 min-h-screen bg-accent">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-primary to-primary py-16 text-accent text-center">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Menu</h1>
          <p className="text-lg text-accent text-opacity-90 max-w-2xl mx-auto">
            Fresh, authentic chai and delicious snacks crafted with premium ingredients.
            Call us to place your order!
          </p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-secondary text-primary shadow-premium"
                    : "bg-white text-primary border-2 border-secondary hover:border-secondary hover:bg-accent"
                }`}
              >
                <span className="mr-2">{products[category].icon}</span>
                {products[category].name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products[activeCategory].items.map((item, idx) => (
              <div
                key={idx}
                className="card p-6 hover:shadow-hover hover:border-secondary hover:border-2 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-primary">{item.name}</h3>
                </div>
                <div className="pt-4 border-t flex justify-between items-center">
                  <span className="text-2xl font-bold text-secondary">
                    {item.variants ? `₹${item.variants[0]}-${item.variants[item.variants.length - 1]}` : `₹${item.price}`}
                  </span>
                  {item.variants && (
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {item.variants.length} sizes
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary text-accent text-center">
        <div className="container-max max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            📞 Ready to Order?
          </h2>
          <p className="text-lg text-accent text-opacity-90 mb-8">
            All items are available for in-store dining. Contact us directly to place your order!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919076165666"
              className="btn-primary px-8 py-4 text-lg font-bold rounded-lg hover:scale-105 transition-transform inline-block"
            >
              📞 Call to Order
            </a>
            <a
              href="mailto:babujichai55@gmail.com?subject=Order%20Inquiry"
              className="btn-secondary px-8 py-4 text-lg font-bold rounded-lg hover:scale-105 transition-transform inline-block"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* STORE INFO */}
      <section className="section-padding bg-white">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-primary mb-6">📍 Visit Us</h3>
          <p className="text-lg text-gray-700 mb-6">
            K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India. Enjoy fresh chai and snacks in a welcoming café environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-center inline-block px-8 py-3 rounded-lg">
              Get Directions
            </Link>
            <a href="tel:+919076165666" className="btn-outline text-center inline-block px-8 py-3 rounded-lg">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
