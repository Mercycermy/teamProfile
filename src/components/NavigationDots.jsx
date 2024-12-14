import React from "react";

const NavigationDots = ({ active }) => {
  const navItems = ["home", "about", "work", "skills", "testimonials", "team","contact"];

  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
