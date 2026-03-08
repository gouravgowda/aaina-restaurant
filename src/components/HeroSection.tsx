"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/rest1.webp')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="font-serif italic text-gold text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Aaina
        </motion.h1>

        <motion.p
          className="text-white text-lg sm:text-xl md:text-2xl tracking-[0.15em] font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Contemporary Indian Fine Dining
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          className="w-20 h-0.5 bg-gold mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="/contact"
            className="px-8 py-3 bg-gold text-dark font-medium text-sm tracking-wider
                       hover:bg-gold-dark transition-all duration-300 min-w-[180px]"
          >
            Reserve Table
          </a>
          <a
            href="/menu"
            className="px-8 py-3 border border-gold text-gold font-medium text-sm tracking-wider
                       hover:bg-gold hover:text-dark transition-all duration-300 min-w-[180px]"
          >
            View Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <i className="ri-arrow-down-s-line text-white text-3xl"></i>
      </motion.div>
    </section>
  );
}
