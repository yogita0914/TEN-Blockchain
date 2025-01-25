import React, { useState } from "react";
import { Menu, X, GraduationCap, BookOpen, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar({ menuItems = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter "Ten Mentor" from the menuItems array
  const tenMentor = menuItems.find((item) => item.title === "Ten Mentor");
  const dropdownItems = menuItems.filter((item) => item.title !== "Ten Mentor");

  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-32'>
        <div className='flex justify-between items-center h-20'>
          {/* Main Heading */}
          <motion.div
            className='flex items-center space-x-2'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen className='h-10 w-10 text-green-600' />
            <div>
              <a href='/' className='text-2xl font-bold text-gray-900'>
                Ten Media
              </a>
              <div className='text-sm text-gray-600'>
                Empowering Media Platforms
              </div>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className='flex items-center sm:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100'
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className='hidden sm:flex sm:items-center sm:space-x-6'>
            <motion.a
              href='/about'
              className='text-sm font-medium text-gray-700 hover:text-blue-600 '
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.a>
            <motion.a
              href='/contact'
              className='text-sm font-medium text-gray-700 hover:text-blue-600 '
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
            {tenMentor && (
              <motion.a
                href={tenMentor.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm font-medium text-gray-700 hover:text-blue-600 '
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                Ten Mentor
              </motion.a>
            )}
            <div
              className='relative'
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className='flex items-center text-sm font-medium text-gray-700 hover:text-blue-600'
              >
                Our Initiatives <ChevronDown className='ml-1 h-4 w-4' />
              </button>
              <motion.div
                className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: isDropdownOpen ? 1 : 0,
                  y: isDropdownOpen ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
              >
                {dropdownItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  >
                    {item.title}
                  </a>
                ))}
              </motion.div>
            </div>
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
        <div className='pt-4 pb-4 space-y-2'>
          <a
            href='/about'
            className='block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50'
          >
            About
          </a>
          <a
            href='/contact'
            className='block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50'
          >
            Contact
          </a>
          {tenMentor && (
            <a
              href={tenMentor.url}
              target='_blank'
              rel='noopener noreferrer'
              className='block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            >
              Ten Mentor
            </a>
          )}
          <div className='border-t border-gray-200'>
            <p className='px-4 pt-2 text-gray-700 font-medium'></p>
            {dropdownItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
