"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  // On home, transparent with white text at top.
  // On other pages, transparent with dark text at top.
  // On all, white with dark text when scrolled.
  const isDarkText = scrolled || !isHome;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/#home" className="flex-shrink-0">
            <span
              className={`font-serif text-2xl md:text-3xl italic transition-colors duration-300 ${
                isDarkText ? "text-brown" : "text-white"
              }`}
            >
              Aaina
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-brown ${
                  isDarkText ? "text-dark" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className={`text-xl transition-colors duration-300 hover:text-brown ${
                isDarkText ? "text-dark" : "text-white"
              }`}
              aria-label="Instagram"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="#"
              className={`text-xl transition-colors duration-300 hover:text-brown ${
                isDarkText ? "text-dark" : "text-white"
              }`}
              aria-label="WhatsApp"
            >
              <i className="ri-whatsapp-line"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isDarkText ? "bg-dark" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isDarkText ? "bg-dark" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isDarkText ? "bg-dark" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-dark text-sm font-medium py-2 hover:text-brown transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 pt-3 border-t border-gray-200">
                <a href="#" className="text-dark hover:text-brown text-xl" aria-label="Instagram">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#" className="text-dark hover:text-brown text-xl" aria-label="WhatsApp">
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
