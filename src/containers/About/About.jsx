import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.css";
import DesignImage from "../images/design.jpg";
import InnovatorsImage from "../images/innovators.jpg";
import FrontendImg from "../images/frontend.jpg"
import FullstackImage from "../images/fullstack.jpg";
import BackendImage from "../images/backend.jpg";

const About = () => {
  const [abouts, setAbouts] = useState([
    {
      imgUrl: FullstackImage,
      title: "Full-Stack Expertise",
      description: "We are skilled full-stack developers proficient in ReactJS, Node.js, Express, and MongoDB. Our team specializes in building robust and scalable web applications tailored to client needs.",
    },
    {
      imgUrl: FrontendImg,
      title: "Front-End Specialists",
      description: "Crafting responsive user interfaces with ReactJS and a focus on seamless user experiences. We turn creative ideas into visually appealing and intuitive designs.",
    },
    {
      imgUrl: BackendImage,
      title: "Back-End Masters",
      description: "Experts in secure authentication systems, API integrations, and database optimization. We deliver reliable and high-performance back-end solutions.",
    },
    {
      imgUrl: DesignImage,
      title: "Creative Designers",
      description: "Beyond code, we excel in thoughtful design—crafting layouts, selecting color schemes, and ensuring usability to create impactful digital solutions.",
    },
    {
      imgUrl: InnovatorsImage,
      title: "Innovative Collaborators",
      description: "We thrive on collaboration, turning visions into tangible products. From startups to enterprises, we bring expertise and creativity to every project.",
    },
    // Add more static abouts data as needed
  ]);
  const [aboutMe, setAboutMe] = useState({
    description: "We are a skilled team of full-stack developers and designers specializing in ReactJS and the MERN stack. With expertise in modern web technologies like React, Node.js, Express, and MongoDB, we deliver end-to-end solutions that are robust, scalable, and user-friendly. Our services range from creating responsive user interfaces and integrating APIs to designing intuitive and visually appealing layouts. We focus on building high-performance web applications tailored to your unique needs, combining technical precision with thoughtful design. Whether you’re a startup, small business, or enterprise, we’re here to bring your vision to life. Let’s create impactful digital solutions together!"
  });
  

  const viewResumeHandler = () => {
    window.open(aboutMe.resumeUrl, "_blank");
  };

  return (
    <>
      <h2 className="head-text">
        I believe that <span>Clean Code</span>
        <br />
        drives <span>Great Solutions</span>
      </h2>

      <div className="app__about-context app__flex">
        <div className="app__about-img app__flex">
         
        </div>
        <div className="app__about-data app__flex">
          <h2 className="head-text">About Us</h2>
          <p className="p-text">{aboutMe.description}</p>
          <div>
            
          </div>
        </div>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
