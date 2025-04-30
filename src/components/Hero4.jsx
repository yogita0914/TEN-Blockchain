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
              What Our Users Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(128, 90, 213, 0.15)" }}
              className="bg-purple-50 p-6 rounded-lg transition-transform duration-300"
            >
              <p className="text-gray-700 italic mb-4">
                "Your system has transformed my blockchain learning experience. Simple, secure, and empowering."
              </p>
              <p className="font-semibold text-purple-600">- Himanshu</p>
              <p className="text-purple-500">React.js Developer</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(128, 90, 213, 0.15)" }}
              className="bg-purple-50 p-6 rounded-lg transition-transform duration-300"
            >
              <p className="text-gray-700 italic mb-4">
                "TEN has been a game-changer for me. The seamless blend of blockchain, security, and real-world application made every interaction rewarding."
              </p>
              <p className="font-semibold text-purple-600">- Mounika</p>
              <p className="text-purple-500">MERN Stack Developer</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
