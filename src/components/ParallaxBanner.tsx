"use client";

import { motion } from "framer-motion";

export default function ParallaxBanner() {
  return (
    <section className="relative h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background with parallax-like fixed effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
          Authentic, Flavorful &amp; Exquisite
        </h2>
        <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto">
          Explore a world of tastes crafted with passion and tradition to
          satisfy every craving!
        </p>
      </motion.div>
    </section>
  );
}
