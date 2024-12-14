import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import Hachton from "../images/project1.png";
import Mobile from "../images/project2.png";
import Pharmacy from "../images/project3.png";
import Mern from "../images/project4.jpg";
import Digital from "../images/project5.png";
import "./Work.css";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWorks, setFilterWorks] = useState([]);
  const [works, setWorks] = useState([]);
  const [touched, setTouched] = useState(null);

  useEffect(() => {
    // Static data
    const staticWorks = [
      {
        title: "Hackathon Projrect",
        description: "A React-based web application offering comprehensive e-commerce solutions. Features include product listings, AI-powered product recommendations, credit and loan services, advanced inventory management, real-time data analytics, and a feedback system for transparency. Built with React and styled using Material-UI for a sleek and responsive design.",
        tags: ["ReactJS"],
        imgUrl: Hachton,
        projectLink: "https://example.com/project-one",
        codeLink: "https://github.com/Helix4c/ehl-frontend",
      },
      {
          title: "Mobile App Design in Figma",
          description: "An innovative and visually appealing mobile app design created using Figma. This project showcases a modern and intuitive user interface tailored for mobile devices. It includes features such as smooth navigation, user-friendly controls, and responsive layouts that ensure a seamless experience across various screen sizes and orientations.",
          tags: [ "Figma"],
          imgUrl:Mobile,
          projectLink: "https://www.figma.com/proto/d5QASqjAXhWyl1yhavGMk1/InspireStart?node-id=0-1&t=Gmf1gaZQKu31iKgw-1",
          codeLink: "https://www.figma.com/design/d5QASqjAXhWyl1yhavGMk1/InspireStart?node-id=0-1&m=dev&t=Gmf1gaZQKu31iKgw-1"
      
      },
      // Add more works as needed
      {
        title: "Pharmacy Management UI Design",
        description: "A user-friendly interface for a pharmacy application designed using Figma. The project aims to simplify medication management, enhance user experience, and streamline workflows for both pharmacy staff and customers.",
        tags: [ "Figma"],
        imgUrl: Pharmacy,
        projectLink: "https://example.com/project-one",
        codeLink: "https://www.figma.com/design/lrCDDVNcWzReOZOWmjpKxD/Pharmacy?node-id=19-372&t=Gmf1gaZQKu31iKgw-0"
    },
    
    {
      title: "User Authenticator MERN Stack",
      description: "A secure and scalable user authentication system built with the MERN stack (MongoDB, Express.js, ReactJS, Node.js). This project allows users to register, log in, and manage their profiles. It includes functionalities such as email verification, password recovery, and secure session management.",
      tags: [ "Backend"],
      imgUrl: Mern,
      projectLink: "https://example.com/user-authenticator-mern-stack",
      codeLink: "https://github.com/Helix4c/Starter-MERN"
  },
  {
    title: "Elbetel Digital Market Website",
    description: "A comprehensive digital market platform built using ReactJS, designed to facilitate online buying and selling. This project aims to create a seamless experience for users to browse products, manage transactions, and interact with sellers. It includes features such as product listings, secure payment integration, user reviews, and an intuitive search function.",
    tags: ["ReactJS",  "Web Development"],
    imgUrl: Digital,
    projectLink: "https://mercycermy.github.io/website/#testimonials",
    codeLink: "https://github.com/Helix4c/Informativewebpage"
}

    ];

    setWorks(staticWorks);
    setFilterWorks(staticWorks);
  }, []);

  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ opacity: 0, scale: 0.5, y: -100 });

    setTimeout(() => {
      setAnimateCard({ opacity: 1, scale: 1, y: 0 });
      if (item === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My creative <span>Portfolio</span> section
      </h2>

      <div className="app__work-filter">
        {["All", "ReactJS", "Web Development", "Figma", "Backend"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
        onClick={() => setTouched(null)}
      >
        {filterWorks.map((work, index) => (
          <motion.div
            className={`app__work-item app__flex ${
              touched === index ? "app__work-touched-nowrap" : ""
            }`}
            key={index}
            onClick={() => setTouched(index)}
            onTouchStart={() => setTouched(index)}
          >
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={`app__work-hover app__flex ${
                  touched === index ? "app__work-touched" : ""
                }`}
              >
                <a
                  href={work.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`app__flex ${
                    work.projectLink.toLowerCase() === "na" ? "none" : ""
                  }`}
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="app__flex"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" title={work.title}>
                {work.title}
              </h4>
              <p
                className="p-text"
                style={{ marginTop: 10 }}
                title={work.description}
              >
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
