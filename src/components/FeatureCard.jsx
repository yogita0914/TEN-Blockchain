import React from 'react';
import { motion } from 'framer-motion';

export function FeatureCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <motion.div 
          className="flex items-center"
          whileHover={{ x: 5 }}
        >
          <motion.div 
            className="p-2 bg-green-100 rounded-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {item.icon}
          </motion.div>
          <h3 className="ml-3 text-lg font-medium text-gray-900">{item.title}</h3>
        </motion.div>
        <p className="mt-4 text-gray-600">{item.description}</p>
        <motion.button 
          className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open(item.url, '_blank')} 
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}
