import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className=" flex items-center justify-center gap-4">
        <h3 className="text-2xl text-gray-200 font-semibold">Aushah Gowhar</h3>
        <div className="flex flex-row gap-6 items-center justify-center text-gray-400 text-4xl p-0 mt-0">
          <a href="https://github.com/aushah1">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/aushahgw">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <p className="text-gray-400">@2025 Aushah</p>
    </div>
  );
};

export default Footer;
