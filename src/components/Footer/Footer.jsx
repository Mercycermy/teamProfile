import React from "react";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css"

const Footer = () => {
  const parentVariant = {
    view: {
      opacity: [0, 1],
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const childSocialVariant = {
    view: {
      y: [-300, 0],
      opacity: [0, 1],
      transition: {
        opacity: {
          duration: 0.6,
        },
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const childCopyVariant = {
    view: {
      y: [-100, 0],
      opacity: [0, 1],
      transition: {
        opacity: {
          duration: 0.6,
        },
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="app__flex app__footer">
      <motion.div
        className="app__footer-contacts app__flex"
        variants={parentVariant}
        whileInView="view"
      >
        {[
          {
            href: "https://www.linkedin.com/Helix4",
            icon: <GrLinkedinOption />,
          },
          {
            href: "https://www.facebook.com/praveenterax",
            icon: <FaFacebookF />,
          },
          {
            href: "https://www.instagram.com/helix4",
            icon: <BsInstagram />,
          },
        ].map((social, index) => (
          <motion.div
            className="app__flex"
            key={index}
            variants={childSocialVariant}
            whileInView="view"
          >
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="app__flex"
            >
              {social.icon}
            </a>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="app__footer-copyrights"
        variants={parentVariant}
        whileInView="view"
      >
        {["&copy; 2024 HELIX", "ALL RIGHTS RESERVED"].map((text, index) => (
          <motion.p
            className="p-text"
            key={index}
            variants={childCopyVariant}
            whileInView="view"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Footer;
