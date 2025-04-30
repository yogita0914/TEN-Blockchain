import React from "react";
import { motion } from "framer-motion";

export function Hero({ featureCardRef }) {
  const scrollToHero2 = () => {
    const offset = 80;
    const elementPosition = featureCardRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header className="bg-gradient-to-b from-purple-100 to-purple-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to TEN <br />
          Blockchain and Cryptocurrency
        </motion.h1>
        <motion.p
          className="text-xl mt-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blockchain is a decentralized digital ledger that records transactions
          across many computers, making data secure, transparent, and
          tamper-proof. It removes the need for central authorities and enables
          peer-to-peer trust.
        </motion.p>
        <motion.p
          className="text-lg mt-4 max-w-2xl mx-auto text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Cryptocurrency is a digital form of money built on blockchain
          technology. It allows secure, borderless transactions, and is often
          used for trading, investments, and powering decentralized
          applications.
        </motion.p>
        <motion.button
          className="mt-10 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToHero2}
        >
          Learn More
        </motion.button>
      </div>
    </header>
  );
}
