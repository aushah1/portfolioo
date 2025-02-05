import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { AiOutlineGithub } from "react-icons/ai";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
const techStack = [
  { name: "HTML5", icon: <DiHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <DiCss3 className="text-blue-600" /> },
  { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
  { name: "React", icon: <DiReact className="text-cyan-500" /> },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssLine className="text-blue-400" />,
  },
];
const Hero = () => {
  return (
    <div className="mt-24 mx-auto relative" id="about">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Web Designer",
              1000,
              "React Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4">
            HEY, I AM <br />
            <span className="text-purple-500">Aushah Gowhar</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 md:text-xl text-lg mb-6">
            I'm a frontend web developer focused on crafting visually engaging,
            responsive, and user-centric web applications. With a passion for
            clean design and optimal performance, I specialize in creating
            intuitive interfaces and interactive features. I stay up-to-date
            with the latest trends and tools, striving to write clean,
            maintainable code that enhances usability and solves real-world
            problems. My goal is to deliver impactful projects through
            collaboration and creative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              onClick={() => window.open("/cv.pdf", "_blank")} // Open CV in a new tab
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto px-5 py-2 border
                                     border-purple-400 rounded-md">
              <a href="/path/to/cv.pdf" download="Aushah_Gowhar_CV.pdf">
                Open CV
              </a>
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-4xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/aushah1">
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/aushahgw">
                <FaLinkedinIn />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[320px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center justify-center py-24 md:px-0 w-full">
        {/* Animated Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="text-gray-900 dark:text-gray-200 font-semibold text-3xl sm:text-4xl mb-10">
          My Tech Stack 🚀
        </motion.p>

        {/* Tech Icons as Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                staggerChildren: 0.2,
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              viewport={{ once: false, threshold: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-white dark:bg-gray-800 
                       shadow-md dark:shadow-lg transition-all cursor-pointer"
              style={{
                transition: "box-shadow 0.3s ease-in-out",
              }}>
              <div className="text-6xl">{tech.icon}</div>
              <p className="mt-3 text-gray-900 dark:text-gray-200 text-lg font-medium">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
