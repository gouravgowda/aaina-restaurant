"use client";

import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const leftColumnCategories: MenuCategory[] = [
  {
    title: "Appetizers",
    items: [
      { name: "Paneer Tikka", price: 280, description: "Marinated cottage cheese grilled to perfection." },
      { name: "Vegetable Samosa", price: 140, description: "Crispy pastry filled with spiced potatoes." },
      { name: "Hara Bhara Kabab", price: 220, description: "Spinach and green pea patties with Indian spices." },
      { name: "Tandoori Mushroom", price: 260, description: "Button mushrooms marinated in tandoori spices." },
      { name: "Chicken Tikka", price: 320, description: "Boneless chicken marinated in yogurt and spices." },
      { name: "Crispy Corn", price: 220, description: "Golden fried corn tossed with spices." },
    ],
  },
  {
    title: "Chinese & Asian",
    items: [
      { name: "Veg Hakka Noodles", price: 260, description: "Stir fried noodles with vegetables." },
      { name: "Chicken Hakka Noodles", price: 300, description: "Noodles tossed with chicken and vegetables." },
      { name: "Veg Fried Rice", price: 250, description: "Wok tossed rice with vegetables." },
      { name: "Chicken Fried Rice", price: 290, description: "Rice cooked with chicken and Asian sauces." },
      { name: "Veg Manchurian", price: 260, description: "Vegetable dumplings in tangy sauce." },
      { name: "Chicken Manchurian", price: 320, description: "Chicken balls in spicy Indo-Chinese sauce." },
    ],
  },
  {
    title: "Soups",
    items: [
      { name: "Tomato Soup", price: 150, description: "Classic tomato soup with herbs." },
      { name: "Sweet Corn Soup", price: 160, description: "Sweet corn soup with vegetables." },
      { name: "Hot & Sour Soup", price: 170, description: "Spicy Indo-Chinese soup with vegetables." },
      { name: "Chicken Manchow Soup", price: 190, description: "Spicy chicken soup topped with crispy noodles." },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Cold Coffee", price: 180, description: "Chilled blended coffee with foam." },
      { name: "Virgin Mojito", price: 160, description: "Refreshing mint and lime drink." },
      { name: "Mango Milkshake", price: 200, description: "Rich mango shake with milk." },
      { name: "Fresh Lime Soda", price: 140, description: "Sweet or salted lime soda." },
      { name: "Masala Chai", price: 80, description: "Traditional Indian spiced tea." },
      { name: "Cappuccino", price: 150, description: "Freshly brewed coffee with milk foam." },
    ],
  },
];

const rightColumnCategories: MenuCategory[] = [
  {
    title: "Main Course",
    items: [
      { name: "Paneer Butter Masala", price: 340, description: "Cottage cheese in rich tomato gravy." },
      { name: "Dal Makhani", price: 260, description: "Black lentils slow cooked with butter." },
      { name: "Mixed Vegetable Curry", price: 280, description: "Seasonal vegetables cooked in aromatic curry." },
      { name: "Palak Paneer", price: 320, description: "Cottage cheese in creamy spinach gravy." },
      { name: "Butter Chicken", price: 420, description: "Tender chicken cooked in creamy tomato gravy." },
      { name: "Chicken Tikka Masala", price: 400, description: "Grilled chicken simmered in rich masala sauce." },
    ],
  },
  {
    title: "Biryani & Rice",
    items: [
      { name: "Vegetable Biryani", price: 280, description: "Fragrant basmati rice with vegetables." },
      { name: "Paneer Biryani", price: 320, description: "Aromatic rice cooked with paneer and spices." },
      { name: "Chicken Biryani", price: 380, description: "Traditional dum cooked chicken biryani." },
      { name: "Jeera Rice", price: 180, description: "Basmati rice flavored with cumin." },
      { name: "Steamed Rice", price: 150, description: "Plain steamed basmati rice." },
    ],
  },
  {
    title: "Indian Breads",
    items: [
      { name: "Butter Naan", price: 70, description: "Soft naan brushed with butter." },
      { name: "Garlic Naan", price: 90, description: "Naan topped with garlic and herbs." },
      { name: "Tandoori Roti", price: 50, description: "Whole wheat bread cooked in tandoor." },
      { name: "Butter Kulcha", price: 90, description: "Soft bread stuffed with spices." },
      { name: "Naan Basket", price: 180, description: "Assorted naan breads." },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Gulab Jamun", price: 120, description: "Soft milk dumplings in sugar syrup." },
      { name: "Brownie with Ice Cream", price: 220, description: "Warm chocolate brownie with vanilla ice cream." },
      { name: "Ice Cream Sundae", price: 180, description: "Classic ice cream topped with chocolate sauce." },
      { name: "Chocolate Lava Cake", price: 200, description: "Warm cake with molten chocolate center." },
    ],
  },
];

function CategoryCard({ category, i }: { category: MenuCategory; i: number }) {
  return (
    <motion.div
      className="bg-beige-dark rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      <h3 className="font-serif text-3xl text-dark mb-6 pb-4 border-b border-brown/20">
        {category.title}
      </h3>
      <div className="space-y-8">
        {category.items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-start group">
            <div className="flex-1 pr-4">
              <h4 className="font-sans text-lg font-semibold text-dark group-hover:text-brown transition-colors">
                {item.name}
              </h4>
              {item.description && (
                <p className="font-sans text-sm text-dark-light/80 mt-1 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
            <span className="font-sans text-lg font-bold text-brown whitespace-nowrap">
              ₹ {item.price}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
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
            Our Menu
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            Discover the flavors of authentic Indian cuisine
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {leftColumnCategories.map((category, i) => (
              <CategoryCard key={category.title} category={category} i={i} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {rightColumnCategories.map((category, i) => (
              <CategoryCard key={category.title} category={category} i={i + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
