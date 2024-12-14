import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/helix",
      icon: <BsLinkedin />,
    },
    {
      href: "https://www.facebook.com/helix",
      icon: <FaFacebookF />,
    },
    {
      href: "https://www.instagram.com/helix",
      icon: <BsInstagram />,
    },
  ];

  return (
    <div className="app__social">
      {socialLinks.map((link, index) => (
        <div key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="app__flex"
          >
            {link.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
