import React from "react";
import { motion } from "framer-motion";
import { Users, Trophy, BookOpen } from "lucide-react";

export function Hero2() {
  return (
    <section className='py-8 bg-gradient-to-b from-green-300 to-green-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-center'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='flex flex-col items-center'
            >
              <Users className='w-12 h-12 mb-4 text-green-600' />
              <h3 className='text-4xl font-bold mb-2'>10K+</h3>
              <p className='text-green-700'>Active Users</p>
            </motion.div>
          </div>
          <div className='text-center'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='flex flex-col items-center'
            >
              <Trophy className='w-12 h-12 mb-4 text-green-600' />
              <h3 className='text-4xl font-bold mb-2'>95%</h3>
              <p className='text-green-700'>Success Rate</p>
            </motion.div>
          </div>
          <div className='text-center'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='flex flex-col items-center'
            >
              <BookOpen className='w-12 h-12 mb-4 text-green-600' />
              <h3 className='text-4xl font-bold mb-2'>500+</h3>
              <p className='text-green-700'>records</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
