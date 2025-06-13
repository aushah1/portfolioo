import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import { AiOutlineGithub } from "react-icons/ai";

const projects = [
  {
    img: project1,
    title: "Netflix Clone",
    description: "A UI clone of Netflix built using React.",
    links: {
      site: "https://aushah1.github.io/Netflix-clone/",
      github: "https://github.com/aushah1/Netflix-clone.git",
    },
  },
  {
    img: project2,
    title: "Solstice",
    description: "A fullstack app built with Node.js and MongoDB.",
    links: {
      site: "#",
      github: "https://github.com/aushah1/Solstice.git",
    },
  },
  {
    img: project3,
    title: "Twitter Clone",
    description: "A Twitter-inspired social media platform.",
    links: {
      site: "https://aushah1.github.io/Twitter-Clone/",
      github: "https://github.com/aushah1/Twitter-Clone.git",
    },
  },
  {
    img: project4,
    title: "ShopSphere",
    description: "A mobile-friendly shopping app built with React Native.",
    links: {
      site: "#",
      github: "https://github.com/aushah1/ShopSphere.git",
    },
  },
  {
    img: project5,
    title: "Sidcup Family Golf Clone",
    description: "A web clone of Sidcup Family Golf's official website.",
    links: {
      site: "https://aushah1.github.io/Sidcup-Family-Golf-Clone/",
      github: "https://github.com/aushah1/Sidcup-Family-Golf-Clone.git",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="mx-auto p-6 md:my-20" id="projects">
      {/* Section Title */}
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
          MY RECENT <span>PROJECTS</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-gray-900 dark:text-gray-100 font-medium text-lg text-center w-full lg:w-3/4">
          Here are some of My Recent Projects where, I showcase My Skills
          Responsive and visually appealing website and some clone projects of
          populer webapp
        </motion.p>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row gap-8 items-center ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-16`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}>
          {/* Project Image with Hover Effect */}
          <motion.div
            className="relative w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg group"
            whileHover={{ scale: 1.05 }}>
            <img
              loading="lazy"
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
          </motion.div>

          {/* Project Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6">{project.description}</p>

            {/* Buttons with Glassmorphism Effect */}
            <div className="flex space-x-4">
              {/* View Site Button */}
              <motion.a
                href={
                  project.links.site !== "#" ? project.links.site : undefined
                }
                aria-label={`View ${project.title} website`}
                className={`px-6 py-2 rounded-lg font-medium text-gray-200 transition duration-300 
                  ${
                    project.links.site === "#"
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-80"
                  }`}
                target={project.links.site !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}>
                {project.links.site === "#" ? "No Live Demo" : "View Site"}
              </motion.a>

              {/* GitHub Button */}
              {project.links.github !== "#" && (
                <motion.a
                  href={project.links.github}
                  aria-label={`View ${project.title} on GitHub`}
                  className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700
                      transition duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}>
                  <AiOutlineGithub className="text-xl" />
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Portfolio;
