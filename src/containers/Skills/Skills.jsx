import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip"; // Named import
import { AppWrap, MotionWrap } from "../../wrapper";
import Html from "../images/html.png";
import Css from "../images/css.jpg";
import Js from "../images/js.jpg";
import Reacti from "../images/react.png";
import Figma from "../images/figma.png";
import Java from "../images/java.jpg";
import Spring from "../images/spring.jpg";
import Nodei from "../images/node.png";
import Express from "../images/ejs.jpg";
import Database from "../images/database.jpg";
import Tsx from "../images/tsx.jpg";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([
    { name: "HTML", icon: Html, bgColor: "#f06529" },
    { name: "CSS", icon: Css, bgColor: "#2965f1" },
    { name: "JavaScript", icon: Js, bgColor: "#f0db4f" },
    { name: "React", icon: Reacti, bgColor: "#61dbfb" },
    { name: "Figma", icon: Figma, bgColor: "#ff4265" },
    { name: "Java", icon: Java, bgColor: "#007396" },
    { name: "Spring Boot", icon: Spring, bgColor: "#6db33f" },
    { name: "Node.js", icon: Nodei, bgColor: "#339933" },
    { name: "Express.js", icon: Express, bgColor: "#000000" },
    { name: "Database", icon: Database, bgColor: "#ffcb2b" },
    { name: "TypeScript", icon: Tsx, bgColor: "#3178c6" },
    // Add more skills as needed
  ]);
  const [experience, setExperience] = useState([
    {
      year: "2023",
      works: [
        { name: "Web Developer", company: "Maleda printing", desc: "Worked on front-end development using React." },
        { name: "UI/UX Designer", company: "Maleda printing", desc: "Designed user interfaces and experiences for  web applications." },
      ],
    },
    {
      year: "2024",
      works: [
        { name: "Web-Developer", company: "Elbetel", desc: "Developed full web applications using MERN stack." },
        { name: "Frontend", company: "Bits Collage", desc: "Developed full Frontend using React." },
        
      ],
    },
    // Add more experiences as needed
  ]);

  const skillVariants = {
    view: {
      x: [-15, 0],
      opacity: [0, 1],
      transition: {
        x: {
          type: "spring",
          stiffness: "10",
        },
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -7,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      y: -7,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <h2 className="head-text">
        Skills <span>&</span> Experience
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name + "-" + index}
              variants={skillVariants}
              whileInView="view"
              whileHover="hover"
              whileTap="tap"
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {exp.works.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      whileInView={{
                        opacity: [0, 1],
                        x: [-100, 5, 0],
                      }}
                      transition={{
                        duration: 1,
                      }}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#313bac"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
