import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-blue-600" />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="mx-auto flex flex-col justify-center items-center text-gray-200 pb-8 md:py-12"
      id="skills">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-gray-900 dark:text-gray-100 font-semibold text-3xl sm:text-4xl mb-10 text-center">
          My Skills 💻
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-gray-900 dark:text-gray-100 font-medium text-lg text-center">
          I have experience in both frontend and fullstack development.
        </motion.p>
      </motion.div>

      {/* Skills Section (Category-wise) */}
      <div className="w-full max-w-5xl">
        {skills.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mb-12">
            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center border-b border-gray-300 dark:border-gray-700 pb-2">
              {skillGroup.category}
            </h3>

            {/* Skills Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
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
              {skillGroup.technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center p-6 rounded-lg 
                    bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800 transition-all 
                    cursor-pointer border border-gray-200 dark:border-gray-700">
                  <div className="text-5xl">{tech.icon}</div>
                  <p className="mt-3 text-gray-900 dark:text-gray-200 text-lg font-medium">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
