import { Link } from "react-router-dom";

export default function Franchise() {
  const benefits = [
    { icon: "🔥", title: "Growing Brand", description: "Babuji Chaay is rapidly expanding with loyal customers" },
    { icon: "☕", title: "Proven Products", description: "50+ authentic beverages and snacks that customers love" },
    { icon: "🤝", title: "Full Support", description: "We provide training, guidance, and ongoing assistance" },
    { icon: "💼", title: "Flexible Model", description: "Various setup options to suit your investment and location" },
  ];

  return (
    <main className="pt-24 min-h-screen bg-accent">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-primary to-primary py-16 text-accent text-center">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Partnership Opportunities</h1>
          <p className="text-lg text-accent text-opacity-90 max-w-2xl mx-auto mb-8">
            Interested in joining Babuji Chaay? We'd love to explore partnership opportunities with you.
          </p>
          <div className="text-3xl">☕ Quality • Growth • Support</div>
        </div>
      </section>

      {/* WHY BABUJI CHAAY */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Why Partner With Us?
            </h2>
            <div className="divider-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="card p-8 text-center hover:border-secondary hover:border-2 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
                What We Provide
              </h2>
              <ul className="space-y-4">
                {[
                  "Proven product menu with 50+ items",
                  "Complete operational training",
                  "Supplier connections and sourcing support",
                  "Marketing guidance and branding materials",
                  "Ongoing operational support",
                  "Quality assurance monitoring"
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-4 animate-fadeInUp"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <span className="text-2xl text-secondary flex-shrink-0">✓</span>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-accent text-center h-full flex flex-col justify-center animate-slideInRight">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-4">Let's Talk!</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Every partnership is unique. We'd love to discuss your vision and explore how we can work together to build something great.
              </p>
              <Link to="/contact" className="btn-primary text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRODUCTS */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Our Product Range
            </h2>
            <div className="divider-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "☕", label: "27 Hot Beverages" },
              { icon: "🥤", label: "6 Cold Drinks" },
              { icon: "🍜", label: "20+ Snacks" },
              { icon: "🍟", label: "5 Fries Options" },
              { icon: "🍔", label: "6 Burgers" },
              { icon: "🥐", label: "4 Toast/Bun" },
              { icon: "🎁", label: "8 Combos" },
              { icon: "🍵", label: "9 Tea Specials" },
            ].map((product, idx) => (
              <div key={idx} className="card p-6 text-center animate-fadeInUp" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="text-4xl mb-3">{product.icon}</div>
                <p className="font-semibold text-primary">{product.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM SECTION */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <div className="divider-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-slideInLeft">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Us Directly</h3>
              <div className="space-y-4">
                <div className="card p-6">
                  <p className="text-secondary font-bold text-lg mb-2">📞 Phone</p>
                  <a href="tel:+919076165666" className="text-primary hover:text-secondary transition-colors font-semibold">
                    +91 90761 65666
                  </a>
                </div>
                <div className="card p-6">
                  <p className="text-secondary font-bold text-lg mb-2">📧 Email</p>
                  <a href="mailto:babujichai55@gmail.com" className="text-primary hover:text-secondary transition-colors font-semibold">
                    babujichai55@gmail.com
                  </a>
                </div>
                <div className="card p-6">
                  <p className="text-secondary font-bold text-lg mb-2">📍 Location</p>
                  <p className="text-primary">K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India</p>
                </div>
              </div>
            </div>

            <div className="animate-slideInRight bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-accent flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4">Tell Us About Yourself</h4>
              <p className="mb-6 leading-relaxed">
                Share your vision, location, and interest level. We'll evaluate the opportunity and get back to you with details.
              </p>
              <Link to="/contact" className="btn-primary text-center">
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-accent text-center">
        <div className="container-max max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-lg text-accent text-opacity-90 mb-8 leading-relaxed">
            We believe in building long-term partnerships with dedicated individuals who share our passion for quality chai and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-center">
              Send Us Your Interest
            </Link>
            <a href="tel:+919076165666" className="btn-secondary text-center">
              Call: +91 90761 65666
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


