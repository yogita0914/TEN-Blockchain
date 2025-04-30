import React, { useState } from "react";
import { Menu, X, GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export function Navbar({ menuItems = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Filter "Ten Mentor" from the menuItems array
  const tenMentor = menuItems.find((item) => item.title === "Ten Mentor");

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32">
        <div className="flex justify-between items-center h-20">
          {/* Main Heading */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Logo} alt="Logo" className="w-12 h-auto md:w-15 " />
            <div>
              <Link to="/" className="text-2xl font-bold text-gray-900">
                Blockchain and Cryptocurrency
              </Link>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <Link
              to="/about"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </Link>
            {tenMentor && (
              <motion.a
                to={tenMentor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                Ten Mentor
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="pt-4 pb-4 space-y-2">
          <Link
            to="/about"
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
          >
            Contact
          </Link>
          {tenMentor && (
            <Link
              to={tenMentor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
            >
              Ten Mentor
            </Link>
          )}
        </div>
      </motion.div>
    </nav>
  );
}
