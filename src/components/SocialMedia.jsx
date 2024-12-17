import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";

const SocialMedia = () => {
  const socialLinks = [
    {
               href: "https://github.com/Helix4c",
               icon: <FaGithub />,
             },
             {
               href: "https://www.linkedin.com/company/heliix4/?viewAsMember=true",
               icon: <GrLinkedinOption />,
             },
             {
               href: "https://t.me/mercycermy",
               icon: <FaTelegramPlane />,
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
