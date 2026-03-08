"use client";

import { motion } from "framer-motion";

export default function ParallaxBanner() {
  return (
    <section className="relative py-32 md:py-40 lg:py-48 flex items-center justify-center overflow-hidden">
      {/* Background with parallax-like fixed effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight drop-shadow-md">
          Authentic, Flavorful &amp; Exquisite
        </h2>
        <p className="text-white/90 text-base md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Explore a world of tastes crafted with passion and tradition to
          satisfy every craving!
        </p>
      </motion.div>
    </section>
  );
}
