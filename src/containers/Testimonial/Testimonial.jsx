import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Testimonial.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Azariyas Desie",
      feedback: "Great experience working with Helix!",
      company: "Maleda Printing",
      
    },
    {
      name: "Abenezer",
      feedback: "Highly recommend Mihret for any project!",
      company: "Elbetel Digital Marketing",
      
    },
    // Add more testimonials as needed
  ]);

 

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <h2 className="head-text">
        See what <span>Others</span> say about us!
      </h2>
      {testimonials.length > 0 && (
        <>
          <div className="app__testimonial-carousel app__flex">
           
            <div className="app__testimonial-content">
              <p className="p-text">{currentTestimonial.feedback}</p>
              <div>
                <h4 className="bold-text">{currentTestimonial.name}</h4>
                <h5 className="p-text">{currentTestimonial.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonials-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

     
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
