import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false); // New state to manage button status

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setIsButtonDisabled(true); // Disable the button when form is submitted

    const formData = new FormData(event.target);
    formData.append("access_key", "4ba5e60e-3cdc-4ef5-a032-b8c9641edc05");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully",
        icon: "success",
      });
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    // Re-enable the button after 5 seconds
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 5000);
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I'm a frontend web developer passionate about crafting visually
                engaging, responsive, and user-centric web applications. I
                specialize in intuitive interfaces, interactive features, and
                clean, maintainable code that enhances usability and solves
                real-world problems. I stay updated with the latest trends to
                deliver impactful projects through collaboration and creative
                solutions.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  11<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="max-w-6xl p-5 md:p-12" id="form">
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              required
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              required
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="message"
              required
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              disabled={isButtonDisabled} // Disable the button based on state
              className={`w-full py-3 rounded-md text-gray-100 font-semibold text-xl ${
                isButtonDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary-color"
              }`}>
              {isButtonDisabled ? "Please wait..." : "Send Message"}
            </button>
            <p className="text-center text-gray-400 mt-2">{result}</p>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
