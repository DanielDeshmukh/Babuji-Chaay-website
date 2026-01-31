import { Link } from "react-router-dom";
import icon from "../assets/icon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Franchise", path: "/franchise" },
    { name: "Contact", path: "/contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "#" },
    { name: "Terms & Conditions", path: "#" },
    { name: "Return Policy", path: "#" }
  ];

  const socialLinks = [
    { icon: "f", name: "Facebook", url: "https://facebook.com" },
    { icon: "in", name: "Instagram", url: "https://instagram.com" },
    { icon: "tw", name: "Twitter", url: "https://twitter.com" },
    { icon: "yt", name: "YouTube", url: "https://youtube.com" }
  ];

  return (
    <footer className="bg-primary text-accent">
      {/* MAIN FOOTER CONTENT */}
      <div className="section-padding border-b border-accent border-opacity-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* BRAND SECTION */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={icon}
                    alt="Babuji Chaay"
                    className="w-10 h-10 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg text-accent">Babuji Chaay</p>
                  <p className="text-xs text-secondary">Brewing Happiness</p>
                </div>
              </Link>
              <p className="text-sm text-accent text-opacity-80 leading-relaxed">
                Authentic Indian chai, premium beverages, and delicious snacks crafted with passion and quality ingredients.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.path}
                      className="text-accent hover:text-secondary transition-colors text-sm"
                    >
                      → {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Contact</h4>
              <ul className="space-y-2 text-sm text-accent">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">📍</span>
                  <span>K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India</span>
                </li>
                <li>
                  <a 
                    href="tel:+919076165666"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span>📞</span>
                    <span>+91 90761 65666</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:babujichai55@gmail.com"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span>✉️</span>
                    <span>babujichai55@gmail.com</span>
                  </a>
                </li>
                <li className="pt-2">
                  <p className="text-xs text-accent text-opacity-80">Mon-Sun: 9AM-11PM</p>
                </li>
              </ul>
            </div>

            {/* FOLLOW US */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Follow Us</h4>
              <div className="flex gap-3 flex-wrap mb-6">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-10 h-10 bg-secondary text-primary rounded-full flex items-center justify-center font-bold hover:bg-accent hover:text-primary transition-all transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="bg-accent bg-opacity-10 rounded-lg p-4">
                <p className="text-xs font-semibold text-secondary mb-2">Newsletter</p>
                <p className="text-xs text-accent text-opacity-80">Subscribe for updates & special offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="py-8">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* COPYRIGHT */}
            <div className="text-center md:text-left">
              <p className="text-sm text-accent text-opacity-80">
                © {currentYear} Babuji Chaay. All rights reserved.
              </p>
            </div>

            {/* CENTER TEXT */}
            <div className="text-center">
              <p className="text-sm font-semibold text-secondary italic">
                "Brewing Happiness • Fresh chai, fresh smiles"
              </p>
            </div>

            {/* LEGAL LINKS */}
            <div className="text-center md:text-right space-x-4">
              {legalLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.path}
                  className="text-xs text-accent text-opacity-80 hover:text-secondary transition-colors inline-block"
                >
                  {link.name}
                  {idx < legalLinks.length - 1 && " •"}
                </a>
              ))}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="mt-8 pt-8 border-t border-accent border-opacity-20">
            <p className="text-center text-xs text-accent text-opacity-70">
              Made with ❤️ for coffee and chai lovers everywhere
            </p>
          </div>
        </div>
      </div>

      {/* BACK TO TOP BUTTON - Could be added dynamically */}
      <style>{`
        @media (min-width: 768px) {
          footer a:hover {
            text-decoration: none;
          }
        }
      `}</style>
    </footer>
  );
}
