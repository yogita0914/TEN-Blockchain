import React from "react";
import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-30 to-white">
      <section className="relative py-16 bg-gradient-to-b from-blue-300 to-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Blockchain and Cryptocurrency
            </h1>
            <p className="text-lg text-blue-700">
              Blockchain and cryptocurrency are transforming the way we think
              about money, data, and security. Blockchain is a decentralized
              ledger technology that ensures transparency, security, and trust
              across digital transactions. Cryptocurrencies are digital or
              virtual currencies that leverage blockchain to facilitate secure,
              peer-to-peer exchanges.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What is Blockchain?
              </h2>
              <p className="text-lg text-gray-700">
                Blockchain is a decentralized digital ledger that records
                transactions across a network of computers. Each block contains
                a list of transactions, and once a block is added to the
                blockchain, it is immutable. This ensures that data stored on
                the blockchain is secure, transparent, and tamper-resistant.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What is Cryptocurrency?
              </h2>
              <p className="text-lg text-blue-800 mb-6">
                Cryptocurrency is a type of digital or virtual currency that
                uses cryptography for security. It operates on a decentralized
                network, usually based on blockchain technology, allowing for
                peer-to-peer transactions without the need for intermediaries.
                Bitcoin, Ethereum, and many other cryptocurrencies are reshaping
                the world of finance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Blockchain and Cryptocurrency
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Blockchain and cryptocurrency offer several key benefits,
              including decentralization, transparency, security, and
              immutability. They have the potential to revolutionize various
              industries, from finance to healthcare, supply chain, and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Decentralization",
                description:
                  "Blockchain removes the need for centralized intermediaries, enabling peer-to-peer transactions and reducing the risk of fraud.",
              },
              {
                name: "Transparency",
                description:
                  "All transactions on the blockchain are publicly visible and immutable, enhancing trust and accountability.",
              },
              {
                name: "Security",
                description:
                  "Cryptocurrencies use cryptographic techniques to ensure that transactions are secure and resistant to hacking or fraud.",
              },
            ].map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-100 rounded-lg p-6 text-center shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Future of Blockchain and Cryptocurrency
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Blockchain and cryptocurrency continue to evolve, with new
              innovations and applications emerging regularly. As adoption
              grows, these technologies are expected to disrupt industries,
              democratize financial systems, and empower individuals globally.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-200 transition-colors duration-300"
            >
              <a href="/learn-more">Learn More</a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
