import { Link } from "react-router-dom";
import picture from "../assets/picture.png";

export default function Home() {
  const features = [
    {
      icon: "☕",
      title: "Premium Chai",
      description: "27 varieties of authentic Indian chai with finest spices"
    },
    {
      icon: "🥪",
      title: "Fresh Snacks",
      description: "Delicious food from Maggie to Burgers crafted daily"
    },
    {
      icon: "🤝",
      title: "Local Favorite",
      description: "Trusted by customers for authentic taste & quality"
    },
    {
      icon: "📍",
      title: "Find Us",
      description: "K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India"
    }
  ];

  const testimonials = [
    {
      name: "Deep Goriwale",
      role: "Regular Customer",
      text: "The best chai in town! Perfect hangout spot with amazing snacks.",
      rating: 5
    },
    {
      name: "Ayush Jadyar",
      role: "Customer",
      text: "Love the variety. Every visit is a new experience with different tea options!",
      rating: 5
    },
    {
      name: "Anonymus Buyer",
      role: "Regular Customer",
      text: "Perfect blend of traditional taste and quality. Worth every visit!",
      rating: 5
    }
  ];

  return (
    <main className="w-full bg-accent">
      {/* HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 md:pb-32 px-4 overflow-hidden bg-gradient-to-b from-primary to-primary">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-secondary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-40 h-40 bg-accent opacity-5 rounded-full blur-3xl"></div>

        <div className="container-max relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-accent space-y-6 animate-slideInLeft">
            <div>
              <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-2">
                Welcome to Babuji Chaay
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif font-bold leading-tight">
                Brewing
                <span className="text-secondary"> Happiness,</span>
                <br />
                One Cup at a Time
              </h1>
            </div>

            <p className="text-base md:text-lg text-accent text-opacity-90 leading-relaxed max-w-lg">
              Experience the authentic taste of traditional Indian chai blended with modern café culture. 
              Premium ingredients, perfect ambiance, and unforgettable moments await you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/menu" className="btn-primary text-center">
                Explore Menu
              </Link>
              <Link to="/contact" className="btn-secondary text-center">
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end animate-slideInRight">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-secondary opacity-20 blur-3xl rounded-full"></div>
              <img
                src={picture}
                alt="Babuji Chaay - Premium Chai"
                className="relative w-full rounded-2xl shadow-hover object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Why Choose Babuji Chaay?
            </h2>
            <div className="divider-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Quality chai, authentic recipes, and a welcoming place to unwind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="card p-8 text-center hover:border-secondary hover:border-2 transform hover:-translate-y-2 animate-fadeInUp transition-all"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Extensive Menu
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-secondary flex-shrink-0">☕</span>
                  <div>
                    <h4 className="font-bold text-primary">27 Hot Beverages</h4>
                    <p className="text-gray-600">From classic Masala Chai to specialty blends</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-secondary flex-shrink-0">🍜</span>
                  <div>
                    <h4 className="font-bold text-primary">20+ Snacks</h4>
                    <p className="text-gray-600">Maggie, Burgers, Fries, and more</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-secondary flex-shrink-0">🎁</span>
                  <div>
                    <h4 className="font-bold text-primary">8 Combo Deals</h4>
                    <p className="text-gray-600">Great value meal combinations</p>
                  </div>
                </div>
              </div>
              <Link to="/menu" className="btn-primary">
                View Full Menu
              </Link>
            </div>

            <div className="animate-slideInRight">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white text-center h-full flex flex-col justify-center">
                <div className="text-6xl mb-4">☕🥪</div>
                <p className="text-xl font-semibold mb-4">Fresh Daily</p>
                <p className="text-accent mb-6 leading-relaxed">
                  Every item is made with premium quality ingredients. We take pride in consistency and taste across every order.
                </p>
                <div className="text-sm text-accent text-opacity-80">
                  ★★★★★ Trusted by our local community
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <div className="divider-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="card p-6 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="pt-4 border-t">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section-padding bg-white">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            📍 Visit Us Today
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India. Open daily with fresh chai and a welcoming atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-center">
              Get in Touch
            </Link>
            <a href="tel:+919076165666" className="btn-outline text-center">
              Call: +91 90761 65666
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
