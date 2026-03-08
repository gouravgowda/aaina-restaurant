"use client";

import Link from "next/link";

const pageLinks = [
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark/5 text-dark font-sans" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-brown">
              Aaina
            </h3>
            <p className="text-dark-light/80 text-sm leading-relaxed max-w-sm">
              Experience the perfect blend of traditional Indian flavors and modern culinary elegance in a warm, inviting atmosphere.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:text-brown hover:shadow-md transition-all duration-300">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:text-brown hover:shadow-md transition-all duration-300">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-dark-light/80 hover:text-brown transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brown opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-dark/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark-light/60">
          <p>© {new Date().getFullYear()} Aaina Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brown transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brown transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
