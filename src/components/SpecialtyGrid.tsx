"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SpecialtyItem {
  name: string;
  price: number;
  image: string;
}

const specialties: SpecialtyItem[] = [
  {
    name: "Paneer Tikka Masala",
    price: 340,
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
  },
  {
    name: "Vegetable Biryani",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
  },
  {
    name: "Butter Naan Basket",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
  },
  {
    name: "Virgin Mojito",
    price: 160,
    image: "/rest9.webp",
  },
  {
    name: "Mixed Grill Platter",
    price: 480,
    image: "/rest7.jpg",
  },
  {
    name: "Masala Dosa",
    price: 220,
    image: "/rest8.jpg",
  },
];

export default function SpecialtyGrid() {
  return (
    <section className="pb-16 md:pb-24 pt-8 md:pt-16 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-dark mb-3">
            Our Specialty
          </h2>
          <p className="text-dark-light/70 max-w-lg text-sm md:text-base">
            Discover what makes us special with our signature dishes that you
            won&apos;t want to miss!
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, i) => (
            <motion.div
              key={item.name}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-[220px] md:h-[250px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Details */}
              <div className="p-5 bg-beige-dark">
                <h3 className="font-serif text-lg md:text-xl text-dark mb-2">
                  {item.name}
                </h3>
                <p className="text-brown font-semibold text-lg">
                  ₹ {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
