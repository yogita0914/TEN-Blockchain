import React from 'react';
import { motion } from 'framer-motion';

export function Footer({ menuItems = [] }) {
  return (
    <footer className="bg-gray-800 text-white mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              Ten Media is committed to providing Media through innovative digital platforms.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a 
                    href={item.url} 
                    target="_blank" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <motion.div 
              className="text-gray-400 space-y-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>Email: info@entrepreneurshipnetwork.net</p>
              {/* <p>Phone: +1 (555) 123-4567</p> */}
              <div className="mt-4 flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">Twitter</a>
                <a href="https://www.linkedin.com/company/the-entrepreneurship-network/" className="hover:text-blue-400 transition-colors duration-200">LinkedIn</a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">Facebook</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Ten Education. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
