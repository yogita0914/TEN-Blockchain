import React from "react";
import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-30 to-white'>
      <section className='relative py-16 bg-gradient-to-b from-green-300 to-green-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              About Ten Media
            </h1>
            <p className='text-lg text-green-700'>
              Powered by{" "}
              <span className='font-bold'>The Entrepreneurship Network</span>,
              At Ten Media, we are dedicated to revolutionizing the media
              industry through cutting-edge digital platforms. Our mission is to
              deliver exceptional content and innovative solutions that
              captivate and engage audiences worldwide..
            </p>
          </motion.div>
        </div>
      </section>
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200'
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Our Story
              </h2>
              <p className='text-lg text-gray-700'>
                Ten Media is at the forefront of digital transformation,
                blending creativity with technology to produce high-quality
                media. Our team of experts is passionate about storytelling,
                visual excellence, and delivering content that resonates with
                our diverse audience.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200'
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Our Vision
              </h2>
              <p className='text-lg text-green-800 mb-6'>
                We envision a world where media is not just consumed but
                experienced in new and exciting ways. By leveraging the latest
                in digital technology, we strive to create immersive and
                interactive content that goes beyond traditional media formats.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className='py-16 bg-gradient-to-r from-green-100 to-green-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              What We Offer
            </h2>
            <p className='text-lg text-gray-700'>
              At Ten Media, we provide a wide range of innovative services to
              meet the ever-evolving demands of the digital age. Our offerings
              are designed to deliver exceptional value and engagement to our
              audience.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                name: "Ten Academy",
                description:
                  "Innovative courses and expert-led training programs.",
              },
              {
                name: "Ten Mentor",
                description: "Guidance from industry experts and mentors.",
              },
              {
                name: "Ten Book Engine",
                description:
                  "A vast library of digital resources and textbooks.",
              },
              {
                name: "Ten Virtual Campus",
                description: "An immersive virtual campus environment.",
              },
              {
                name: "Ten Virtual University",
                description: "Accredited degrees and certifications online.",
              },
              { name: "Ten media", description: "Media platforms." },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className='bg-green-100 rounded-lg p-6 text-center shadow-lg'
              >
                <h3 className='text-xl font-bold text-green-800 mb-2'>
                  {item.name}
                </h3>
                <p className='text-gray-700'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-r from-green-100 to-green-30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Start Your Journey Today
            </h2>
            <p className='text-lg text-gray-700 mb-6'>
              Explore our platforms and join thousands of people.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-200 transition-colors duration-300'
            >
              <a href='/'>Learn More</a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
