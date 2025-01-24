import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f4a1814b-741b-4320-996e-6cc50d711831");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative py-16 bg-gradient-to-r from-green-300 to-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-green-700">
              Get in touch with us for any inquiries or support.
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-6">
                We are here to assist you. Please reach out with any questions or concerns, and we will get back to you promptly.
              </p>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                  />
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Submit Form
                </motion.button>
              </form>
              <span className="block mt-4 text-green-700">{result}</span>
            </motion.div>

    
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg"
                alt="Education"
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-100 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Office</h2>
            <p className="text-lg text-gray-700">
              You can reach us at our headquarters for any in-person inquiries or visits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200"
            >
              <h3 className="text-xl font-bold text-green-800 mb-4">Email Us</h3>
              <p className="text-gray-700">info@entrepreneurshipnetwork.net</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200"
            >
              <h3 className="text-xl font-bold text-green-800 mb-4">Company Name</h3>
              <p className="text-gray-700">TEN (The Entrepreneurship Network)</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200"
            >
              <h3 className="text-xl font-bold text-green-800 mb-4">Visit Us</h3>
              <p className="text-gray-700">India accelerator Noida 201301 UP, India</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
