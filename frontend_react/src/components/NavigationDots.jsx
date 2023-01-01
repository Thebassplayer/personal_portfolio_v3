import React from "react";

const navbarButtons = [
  "home",
  "about",
  "work",
  "skills",
  "testimonials",
  "contact",
];

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navbarButtons.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          onClick={() => setToggle(false)}
          style={
            active === item ? { backgroundColor: "var(--secondary-color)" } : {}
          }
        />
      ))}
    </div>
  );
};

export default NavigationDots;
