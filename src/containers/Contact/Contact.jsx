import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS library

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { email, message, subject, name } = formData;

  const handleChangeInput = (e) => {
    const { name: fieldName, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS configuration
    const serviceId = "service_g7fj9x1";
    const templateId = "template_ew0hm63";
    const publicKey = "47W1VeLGBhasjhak1";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error: ", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <>
      <h2 className="head-text">
        Take a coffee & <span>chat</span> with <span>us</span>
      </h2>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:helix4startup@gmail.com" className="p-text">
            helix4startup@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+251960572142" className="p-text">
            +251-960-572-142
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__contact-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
              required
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
              required
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Subject"
              value={subject}
              onChange={handleChangeInput}
              name="subject"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
              required
            />
          </div>
          <button
            type="submit"
            className="portfolio-button"
            disabled={loading}
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in <span>Touch!</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
