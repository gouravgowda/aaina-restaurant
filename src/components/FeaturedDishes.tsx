"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Dish {
  name: string;
  description: string;
  price: number;
  badge: string;
  badgeColor: string;
  image: string;
}

const dishes: Dish[] = [
  {
    name: "Butter Chicken",
    description:
      "Our signature dish featuring tender chicken pieces simmered in a rich, creamy tomato-based sauce with aromatic spices. A timeless classic that melts in your mouth.",
    price: 420,
    badge: "Most Popular",
    badgeColor: "bg-[#6B7A4A] text-white",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
  },
  {
    name: "Penne Alfredo Pasta",
    description:
      "Creamy penne pasta tossed in rich Alfredo sauce and topped with parmesan cheese.",
    price: 380,
    badge: "Premium",
    badgeColor: "bg-dark text-white",
    image: "/rest2.jpg",
  },
  {
    name: "Paneer Tikka",
    description:
      "Cubes of fresh cottage cheese marinated in a blend of yogurt and spices, grilled to perfection in a tandoor oven. Served with mint chutney and fresh salad.",
    price: 320,
    badge: "Chef's Special",
    badgeColor: "bg-gold text-dark",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
  },
  {
    name: "Hyderabadi Biryani",
    description:
      "A fragrant and flavorful rice dish layered with aromatic basmati rice, tender meat, and a blend of exotic spices. Cooked in the traditional dum style.",
    price: 450,
    badge: "Bestseller",
    badgeColor: "bg-brown text-white",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
  },
];

export default function FeaturedDishes() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + dishes.length) % dishes.length);
    },
    []
  );

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, [paginate]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const dish = dishes[current];

  return (
    <section id="menu" className="py-16 md:py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-dark mb-4">
            Featured Dishes
          </h2>
          <p className="text-dark-light/70 max-w-xl mx-auto">
            Experience our handpicked selection of signature dishes that
            showcase the best of Indian cuisine
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                {/* Image Side */}
                <div className="relative h-[300px] md:h-[500px]">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Badge */}
                  <span
                    className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-medium ${dish.badgeColor}`}
                  >
                    {dish.badge}
                  </span>
                </div>

                {/* Text Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left items-center md:items-start">
                  <h3 className="font-serif text-3xl md:text-4xl text-dark mb-4">
                    {dish.name}
                  </h3>
                  <p className="text-dark-light/70 leading-relaxed mb-6 text-sm md:text-base">
                    {dish.description}
                  </p>
                  <p className="text-brown font-semibold text-2xl md:text-3xl mb-6">
                    ₹ {dish.price}
                  </p>
                  <div>
                    <button className="px-8 py-3 bg-brown text-white text-sm font-medium tracking-wider hover:bg-brown-light transition-colors duration-300 rounded">
                      Order Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous dish"
          >
            <i className="ri-arrow-left-s-line text-xl text-dark"></i>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Next dish"
          >
            <i className="ri-arrow-right-s-line text-xl text-dark"></i>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {dishes.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-3 bg-brown"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to dish ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
