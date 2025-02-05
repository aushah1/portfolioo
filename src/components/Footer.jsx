import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-gray-900 mx-auto px-6 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      {/* Name & Social Links */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Name with Gradient */}
        <img src="/a.png" alt="" className="w-10 h-10 filter invert" />
        <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
          Aushah Gowhar
        </h3>

        {/* Social Icons */}
        <div className="flex gap-5 text-gray-400 text-3xl">
          {/* GitHub */}
          <motion.a
            href="https://github.com/aushah1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            transition={{ duration: 0.3 }}>
            <FaGithubSquare />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/aushahgw"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            transition={{ duration: 0.3 }}>
            <FaLinkedin />
          </motion.a>
        </div>
      </div>

      {/* Copyright Text */}
      <p className="text-gray-400 mt-6 md:mt-0 text-sm md:text-lg">
        © {new Date().getFullYear()} Aushah. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
