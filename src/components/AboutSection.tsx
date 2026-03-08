"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="pt-8 pb-20 md:pt-12 md:pb-32 bg-[#fdfbf7]">
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
            About Aaina
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            Reflecting the essence of Indian culinary artistry
          </p>
        </motion.div>

        {/* Our Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image Card */}
          <motion.div
            className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/rest1.webp" 
              alt="Aaina pizza and culinary artistry"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="flex flex-col justify-center text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark mb-8">
              Our Story
            </h3>
            
            <div className="text-gray-600 space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                Aaina, meaning &quot;mirror&quot; in Hindi, reflects our commitment to 
                showcasing the true essence of Indian cuisine. Founded with a 
                passion for authentic flavors and contemporary presentation, we&apos;ve 
                created a dining experience that honors tradition while embracing 
                modern culinary techniques.
              </p>
              <p>
                Our journey began with a simple vision: to create a space where 
                food lovers could experience the diverse flavors of India in an 
                elegant, welcoming environment. Every dish we serve is a reflection 
                of our dedication to quality ingredients, time-honored recipes, 
                and innovative cooking methods.
              </p>
              <p>
                Whether you are seeking not just a meal, but a 
                sensory journey into the rich tapestry of Indian gastronomy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
