"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/rest1.webp",
    alt: "Aaina restaurant pizza",
  },
  {
    src: "/rest2.jpg",
    alt: "Penne Alfredo Pasta",
  },
  {
    src: "/rest3.jpg",
    alt: "Gourmet burger",
  },
  {
    src: "/rest4.jpg",
    alt: "Indian snacks platter",
  },
  {
    src: "/rest5.webp",
    alt: "Fresh salad plate",
  },
  {
    src: "/rest6.avif",
    alt: "Restaurant ambience",
  },
  {
    src: "/rest7.jpg",
    alt: "Mixed Grill Platter",
  },
  {
    src: "/rest8.jpg",
    alt: "Masala Dosa",
  },
  {
    src: "/rest9.webp",
    alt: "Virgin Mojito",
  },
];

export default function GallerySection() {
  return (
    <section className="pt-8 pb-20 md:pt-12 md:pb-32 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-dark mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            A visual journey through our culinary creations and ambiance
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-sm group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                  <i className="ri-add-line text-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
