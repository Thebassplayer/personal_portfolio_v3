import React from "react";

const navbarButtons = [
  "home",
  "about",
  "work",
  "skills",
  "testimonial",
  "contact",
];

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {navbarButtons.map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={
          active === item ? { backgroundColor: "var(--secondary-color)" } : {}
        }
      />
    ))}
  </div>
);

export default NavigationDots;
