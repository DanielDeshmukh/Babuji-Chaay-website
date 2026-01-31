import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: ["K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India"],
      link: "https://www.google.com/maps/search/?api=1&query=K%20D%20Empire%2C%20Kanakia%20Park%2C%20Mira%20Road%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401107%2C%20India"
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+91 90761 65666"],
      link: "tel:+919076165666"
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["babujichai55@gmail.com"],
      link: "mailto:babujichai55@gmail.com"
    },
    {
      icon: "⏰",
      title: "Hours",
      details: ["Mon - Sun: 8:00 AM - 10:00 PM", "Holidays: 10:00 AM - 8:00 PM"],
      link: null
    }
  ];

  const socialLinks = [
    { icon: "f", name: "Facebook", url: "https://facebook.com" },
    { icon: "in", name: "Instagram", url: "https://instagram.com" },
    { icon: "tw", name: "Twitter", url: "https://twitter.com" },
    { icon: "yt", name: "YouTube", url: "https://youtube.com" }
  ];

  return (
    <main className="pt-24 min-h-screen bg-accent">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-primary to-primary py-16 text-accent text-center">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-accent text-opacity-90 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions, want to visit us, or are interested in franchise opportunities.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION CARDS */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, idx) => (
              <div 
                key={idx}
                className="card p-6 text-center hover:shadow-hover transition-all transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-700 text-sm">{detail}</p>
                  ))}
                </div>
                {info.link && (
                  <a 
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-semibold hover:underline text-sm"
                  >
                    Open →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* FORM */}
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-500 text-green-700 rounded-lg">
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-20 transition"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-20 transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-20 transition"
                      placeholder="+91 xxxxx xxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-20 transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="franchise">Franchise Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-20 transition resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full text-center">
                  Send Message
                </button>
              </form>
            </div>

            {/* INFO SECTION */}
            <div className="animate-slideInRight space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Visit Us Today!</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Come experience the authentic taste of Babuji Chaay. Our welcoming team is ready to serve you fresh, 
                  handcrafted beverages and delicious snacks in a warm, inviting atmosphere.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're a customer looking for the perfect chai experience or a potential franchise partner, 
                  we're here to help!
                </p>
              </div>

              <div className="bg-primary rounded-xl p-6 text-accent">
                <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/menu" className="hover:text-secondary transition-colors flex items-center gap-2">
                      ☕ Explore Our Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="/franchise" className="hover:text-secondary transition-colors flex items-center gap-2">
                      🚀 Franchise Opportunities
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+919076165666" className="hover:text-secondary transition-colors flex items-center gap-2">
                      📞 Call: +91 90761 65666
                    </a>
                  </li>
                  <li>
                    <a href="mailto:babujichai55@gmail.com" className="hover:text-secondary transition-colors flex items-center gap-2">
                      ✉️ Email: babujichai55@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold hover:bg-primary hover:text-secondary transition-colors transform hover:scale-110"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="section-padding bg-gray-100">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Find Us on Map</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-premium">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Babuji Chaay Location"
              src="https://www.google.com/maps?q=K%20D%20Empire%2C%20Kanakia%20Park%2C%20Mira%20Road%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401107%2C%20India&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ QUICK LINKS */}
      <section className="section-padding bg-accent">
        <div className="container-max text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Have Questions?</h2>
          <p className="text-gray-700 mb-8">
            Reach out to us directly. We're always happy to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:babujichai55@gmail.com" className="btn-primary text-center">
              Email Us
            </a>
            <a href="tel:+919076165666" className="btn-outline text-center">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
