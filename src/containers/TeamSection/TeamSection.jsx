import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./TeamSection.css";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Eliyana Belay",
      role: "Backend Developer",
      bio: "Experienced backend specialist with expertise in Node.js, Express, and database management."
    },
    {
      name: "Mihret Tsegaye",
      role: "Web Designer & Front-End Developer",
      bio: "Mihret is a web designer and front-end developer skilled in ReactJS, HTML, CSS, and JavaScript, with a focus on creating visually appealing and user-friendly interfaces."
    },
    {
      name: "Mahlet Almu",
      role: "Backend Developer",
      bio: "Mahlet is a backend developer with experience in server-side logic, API development, and cloud services integration."
    },
    {
      name: "Yonas Ayalew",
      role: "Front-End Developer",
      bio: "Yonas is a front-end developer with expertise in creating dynamic and responsive web applications using ReactJS and JavaScript."
    },
    {
      name: "Briuk Tariku",
      role: "Backend & Database Specialist",
      bio: "Briuk is a backend and database specialist with extensive experience in database design, optimization, and server management."
    }
]);


  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <div className="app__wrapper app__flex">
      <h2 className="head-text">
        Meet Our <span>Team</span>
      </h2>
      {teamMembers.length > 0 && (
        <>
          <div className="app__team-carousel app__flex">
            <motion.div className="app__team-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <p className="p-text">{currentMember.bio}</p>
              <div>
                <h4 className="bold-text">{currentMember.name}</h4>
                <h5 className="p-text">{currentMember.role}</h5>
                <h6 className="p-text">{currentMember.company}</h6>
              </div>
            </motion.div>
          </div>

          <div className="app__team-btns app__flex">
            <div
              className="app__flex"
              onClick={() => handleClick(currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1)}
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() => handleClick(currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1)}
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(TeamSection, "app__team"),
  "team",
  "app__primarybg"
);
