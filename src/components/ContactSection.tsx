"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      // Fallback: Simulate API call if webhook is not configured
      console.warn("N8N Webhook URL not configured. Simulating submission.");
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Failed to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            We&apos;d love to hear from you
          </p>
        </motion.div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Get In Touch & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <h3 className="font-serif text-3xl md:text-4xl text-dark mb-2">
              Get In Touch
            </h3>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brown rounded-xl flex items-center justify-center text-white shrink-0 mt-1 shadow-sm">
                <i className="ri-map-pin-line text-xl"></i>
              </div>
              <div>
                <h4 className="font-sans text-lg font-semibold text-dark mb-1">
                  Address
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Aaina Restaurant, Food District,<br />Mysore, Karnataka 570001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brown rounded-xl flex items-center justify-center text-white shrink-0 mt-1 shadow-sm">
                <i className="ri-phone-line text-xl"></i>
              </div>
              <div>
                <h4 className="font-sans text-lg font-semibold text-dark mb-1">
                  Phone
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brown rounded-xl flex items-center justify-center text-white shrink-0 mt-1 shadow-sm">
                <i className="ri-mail-line text-xl"></i>
              </div>
              <div>
                <h4 className="font-sans text-lg font-semibold text-dark mb-1">
                  Email
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  info@aaina-restaurant.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brown rounded-xl flex items-center justify-center text-white shrink-0 mt-1 shadow-sm">
                <i className="ri-time-line text-xl"></i>
              </div>
              <div>
                <h4 className="font-sans text-lg font-semibold text-dark mb-1">
                  Hours
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Mon - Sun: 11:00 AM - 11:00 PM
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-[300px] mt-4 rounded-xl overflow-hidden shadow-sm">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.683231232808!2d76.6152590751123!3d12.337094987923061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7be90c4fadbb%3A0xf9ab6e07ffef10e9!2sAaina!5e0!3m2!1sen!2sin!4v1772813220873!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aaina Restaurant Location"
              />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#f7f3ee] rounded-3xl p-8 md:p-10 lg:p-12 shadow-sm"
          >
            <h3 className="font-serif text-3xl md:text-4xl text-dark mb-8">
              Send Us a Message
            </h3>
            
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-light mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brown focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-light mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brown focus:border-transparent outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark-light mb-2">
                  Phone
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brown focus:border-transparent outline-none transition-all duration-300"
                  placeholder="+91"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-light mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brown focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
                <p className="text-xs text-gray-500 mt-2 text-right">{formData.message.length}/500 characters</p>
              </div>

              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-2 bg-brown text-white font-medium rounded-xl hover:bg-brown-light transition-colors duration-300 shadow-md disabled:bg-brown/70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Success Message UI */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 text-green-800 rounded-xl text-sm border border-green-200 mt-2 flex items-center gap-3"
                >
                  <i className="ri-checkbox-circle-fill text-green-600 text-lg"></i>
                  Message sent successfully! We will get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
