import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-primary text-accent fixed top-0 left-0 z-50 shadow-premium">
        <div className="container-max px-4 md:px-6 py-4 flex items-center justify-between">
          
          {/* LOGO + NAME */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            onClick={() => setOpen(false)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={icon} 
                alt="Babuji Chaay Logo" 
                className="w-12 h-12 object-cover transform group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-wider text-accent block leading-tight">
                Babuji
              </span>
              <span className="text-sm font-semibold text-secondary">Chaay Café</span>
            </div>
          </Link>

          {/* HAMBURGER MENU */}
          <button
            className="text-3xl md:hidden focus:outline-none transition-colors hover:text-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✖" : "☰"}
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex gap-1">
            <NavLink href="/" label="Home" />
            <NavLink href="/menu" label="Menu" />
            <NavLink href="/franchise" label="Franchise" />
            <NavLink href="/contact" label="Contact" />
          </nav>

          {/* DESKTOP CTA BUTTON */}
          <Link
            to="/contact"
            className="hidden md:inline-block btn-primary text-sm"
          >
            Get In Touch
          </Link>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-primary border-t border-secondary border-opacity-20 shadow-lg animate-slideDown">
            <nav className="flex flex-col container-max px-4 py-6 space-y-2">
              <MobileNavLink href="/" label="Home" onClose={() => setOpen(false)} />
              <MobileNavLink href="/menu" label="Menu" onClose={() => setOpen(false)} />
              <MobileNavLink href="/franchise" label="Franchise" onClose={() => setOpen(false)} />
              <MobileNavLink href="/contact" label="Contact" onClose={() => setOpen(false)} />
              <Link
                to="/contact"
                className="btn-primary text-center w-full mt-4"
                onClick={() => setOpen(false)}
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

function NavLink({ href, label }) {
  return (
    <Link
      to={href}
      className="px-4 py-2 text-lg font-medium text-accent hover:text-secondary transition-colors duration-300 relative group"
    >
      {label}
      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </Link>
  );
}

function MobileNavLink({ href, label, onClose }) {
  return (
    <Link
      to={href}
      onClick={onClose}
      className="block px-4 py-3 text-lg font-medium text-accent hover:bg-primary-dark hover:text-secondary transition-colors duration-300 rounded-lg"
    >
      {label}
    </Link>
  );
}
