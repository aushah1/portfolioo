import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 border-b border-gray-900">
      <div
        className="px-4 md:px-8 lg:px-16 mx-auto  flex justify-between text-gray-200
        text-xl items-center  h-20">
        <div className="flex items-center gap-3">
          <img src="/a.png" alt="" className="w-10 h-10 filter invert" />
          <a
            href="#"
            className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Aushah Gowhar
          </a>
        </div>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40">
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <li>
              <Link
                to="skills"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
