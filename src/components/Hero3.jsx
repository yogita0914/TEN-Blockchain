import React from "react";
import { motion } from "framer-motion";

export function Hero3({ featureCardRef }) {
  const scrollToFeatureCards = () => {
    const offset = 80;
    const elementPosition = featureCardRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <section className='py-20 bg-gradient-to-r from-green-100 to-green-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Ready to Start Your Learning Journey?
          </h2>
          <p className='text-xl text-green-700 mb-8'>
            Join thousands of users already enrolled with Ten Media
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-200 transition-colors duration-300'
            onClick={scrollToFeatureCards}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
