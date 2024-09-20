import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the Salary Insight Platform
        </h1>
        <p className="text-lg text-gray-600">
          Get accurate insights and trends on Machine Learning Engineer salaries from 2020 to 2024.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6">Features of the Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-2">Salary Data Analysis</h3>
            <p className="text-gray-600">
              Analyze salaries across years and job titles with interactive graphs and tables.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-2">Yearly Trends</h3>
            <p className="text-gray-600">
              Track salary trends from 2020 to 2024 for ML Engineers across industries.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-2">Aggregated Insights</h3>
            <p className="text-gray-600">
              Get aggregated job data and salary comparisons in an easy-to-understand format.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-gray-600 mb-4">
          Join us to explore more salary insights and stay ahead in your career!
        </p>

        <Link to={"/salaries"}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg"
        >
          Get Started
        </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
