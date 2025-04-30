import React from "react";
import { motion } from "framer-motion";

export function Hero4() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our users Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50 p-6 rounded-lg"
            >
              <p className="text-gray-600 italic mb-4">
                "Your System are change my fitness experience."
              </p>
              <p className="font-semibold text-gray-900">- Himanshu</p>
              <p className="text-gray-500">React.js Developer</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50 p-6 rounded-lg"
            >
              <p className="text-gray-600 italic mb-4">
                "FitVerse has been a game-changer for me, offering a unique way
                to track my fitness journey while rewarding my progress. The
                integration of blockchain and cryptocurrency adds a layer of
                security and value, making each step towards better health even
                more rewarding."
              </p>
              <p className="font-semibold text-gray-900">- Mounika</p>
              <p className="text-gray-500"> Mern Stack Developer</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
