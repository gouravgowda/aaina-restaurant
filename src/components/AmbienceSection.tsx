"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AmbienceSection() {
  return (
    <section id="gallery" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Side — edge to edge */}
        <motion.div
          className="relative h-[400px] lg:h-[600px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80"
            alt="Aaina restaurant pizza"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="bg-beige flex flex-col justify-center px-8 md:px-16 py-12 lg:py-0 text-center lg:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-brown text-xs font-medium tracking-[0.2em] uppercase mb-4">
            The Refined Ambience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark mb-6 leading-tight">
            Elegant Indoor &amp; Outdoor Spaces
          </h2>
          <p className="text-dark-light/80 leading-relaxed mb-5 text-sm md:text-base">
            Step into Aaina to discover a spacious, refined atmosphere where
            comfort meets elegance. Our large indoor dining area features
            thoughtfully arranged seating, soft ambient lighting, and the
            enticing aroma of authentic spices, making it perfect for
            everything from romantic dinners to celebratory gatherings.
          </p>
          <p className="text-dark-light/80 leading-relaxed mb-8 text-sm md:text-base">
            For an intimate experience, our outdoor seating area offers a
            peaceful escape surrounded by greenery. It&apos;s the ideal spot to
            relax with close friends or enjoy a quiet moment, whether you&apos;re
            savoring a refreshing beverage during lunch or unwinding under the
            evening sky.
          </p>
          <div>
            <a
              href="#gallery"
              className="inline-block px-8 py-3 bg-brown text-white text-sm font-medium tracking-wider hover:bg-brown-light transition-colors duration-300 rounded"
            >
              See Gallery
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
