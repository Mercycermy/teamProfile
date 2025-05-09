import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import Hachton from "../images/project1.png";
import Mobile from "../images/project2.png";
import Pharmacy from "../images/project3.png";
import Mern from "../images/project4.jpg";
import Akilas from "../images/akilas.jpg";
import Backimg from "../images/backimg.png";
import Jdplc from "../images/jdplc.jpg";
import Kenginer from "../images/kenginer.jpg";
import Petshop from "../images/petshop.jpg";
import Pharmacy2 from "../images/pharmacy.jpg";
import "./Work.css";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWorks, setFilterWorks] = useState([]);
  const [works, setWorks] = useState([]);
  const [touched, setTouched] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null); // For modal

  useEffect(() => {
    const staticWorks = [
      {
        title: "Hackathon Project",
        description: "A React-based e-commerce platform with AI-powered recommendations and advanced inventory management.",
        tags: ["ReactJS"],
        imgUrl: Hachton,
        projectLink: "https://example.com/project-one",
        codeLink: "https://github.com/Helix4c/ehl-frontend",
      },
      {
        title: "Mobile App Design in Figma",
        description: "A modern and intuitive mobile app design with smooth navigation and responsive layouts.",
        tags: ["Figma"],
        imgUrl: Mobile,
        projectLink: "https://www.figma.com/proto/d5QASqjAXhWyl1yhavGMk1/InspireStart?node-id=0-1&t=Gmf1gaZQKu31iKgw-1",
        codeLink: "https://www.figma.com/design/d5QASqjAXhWyl1yhavGMk1/InspireStart?node-id=0-1&m=dev&t=Gmf1gaZQKu31iKgw-1",
      },
      {
        title: "Pharmacy Management UI Design",
        description: "A user-friendly pharmacy app interface designed to enhance workflows and user experience.",
        tags: ["Figma"],
        imgUrl: Pharmacy,
        projectLink: "https://example.com/project-one",
        codeLink: "https://www.figma.com/design/lrCDDVNcWzReOZOWmjpKxD/Pharmacy?node-id=19-372&t=Gmf1gaZQKu31iKgw-0",
      },
      {
        title: "User Authenticator MERN Stack",
        description: "A secure user authentication system with email verification and password recovery.",
        tags: ["Backend"],
        imgUrl: Mern,
        projectLink: "https://example.com/user-authenticator-mern-stack",
        codeLink: "https://github.com/Helix4c/Starter-MERN",
      },
      {
        title: "DIY Instruction API",
        description: "A REST API for managing DIY projects, categories, and tags with filtering and pagination.",
        tags: ["Backend"],
        imgUrl: Backimg,
        projectLink: "https://github.com/adams1864/DIY-Project-Instruction-Platform",
        codeLink: "https://github.com/adams1864/DIY-Project-Instruction-Platform",
      },
      {
        title: "Social Media API",
        description: "A Django-based API for creating posts, following users, and viewing personalized feeds.",
        tags: ["Backend"],
        imgUrl: Backimg,
        projectLink: "https://github.com/adams1864/Alx_DjangoLearnLab/tree/main/social_media_api",
        codeLink: "https://github.com/adams1864/Alx_DjangoLearnLab/tree/main/social_media_api",
      },
      {
        title: "Rental System",
        description: "A rental system built with Node.js, Express, MySQL, and Socket.IO.",
        tags: ["Backend"],
        imgUrl: Backimg,
        projectLink: "https://github.com/adams1864/rental-system",
        codeLink: "https://github.com/adams1864/rental-system",
      },
      {
        title: "HelixBlog Backend",
        description: "A blogging platform backend with user authentication, post management, and image uploads.",
        tags: ["Backend", "ReactJS"],
        imgUrl: Backimg,
        projectLink: "https://github.com/adams1864/helixblog-backend/tree/master",
        codeLink: "https://github.com/adams1864/helixblog-backend/tree/master",
      },
      {
        title: "Empire Pharmacy",
        description: "A trusted online pharmacy offering affordable medicines and healthcare solutions.",
        tags: ["Figma", "ReactJS", "Web Development"],
        imgUrl: Pharmacy2,
        projectLink: "http://www.empirepharmacyplc.com/",
        codeLink: "https://github.com/Mercycermy/PharmacyWeb",
      },
      {
        title: "K-Engineering",
        description: "Smart security and energy solutions for homes and businesses in Ethiopia.",
        tags: ["ReactJS", "Web Development"],
        imgUrl: Kenginer ,
        projectLink: "https://mercycermy.github.io/kENGINEERING/",
        codeLink: "https://github.com/Mercycermy/kENGINEERING",
      },
      {
        title: "Family Pet Shop",
        description: "A pet shop offering premium pet food, training, and adoption services.",
        tags: ["ReactJS", "Web Development"],
        imgUrl: Petshop,
        projectLink: "https://mercycermy.github.io/family-pet/",
        codeLink: "https://github.com/Mercycermy/family-pet",
      },
      {
        title: "Filmmaker Portfolio",
        description: "A portfolio showcasing filmmaking projects and collaborations.",
        tags: ["Figma", "ReactJS", "Web Development"],
        imgUrl: Akilas,
        projectLink: "https://mercycermy.github.io/filmakerweb/",
        codeLink: "https://github.com/Mercycermy/filmakerweb",
      },
      {
        title: "JD General Trading",
        description: "A Figma design for a business specializing in medical oxygen and automotive sales.",
        tags: ["Figma"],
        imgUrl: Jdplc,
        projectLink: "https://www.figma.com/design/LM6OpHjx2TXNgRs774aG2l/JD-General-Trading?node-id=0-1&p=f&t=viUdbt41dvYHjMw5-0",
        codeLink: "https://www.figma.com/design/LM6OpHjx2TXNgRs774aG2l/JD-General-Trading?node-id=0-1&p=f&t=viUdbt41dvYHjMw5-0",
      },
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

  const handleDescriptionClick = (work) => {
    setSelectedWork(work); // Set the selected work for the modal
  };

  const closeModal = () => {
    setSelectedWork(null); // Close the modal
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
      >
        {filterWorks.map((work, index) => (
          <motion.div
            className="app__work-item app__flex"
            key={index}
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
                className="app__work-hover app__flex"
              >
                <a
                  href={work.projectLink}
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
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10, color: "black" }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for showing details */}
      {selectedWork && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedWork.title}</h3>
            <p>{selectedWork.description}</p>
            <a href={selectedWork.projectLink} target="_blank" rel="noreferrer">
              View Project
            </a>
            <br />
            <a href={selectedWork.codeLink} target="_blank" rel="noreferrer">
              View Code
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
