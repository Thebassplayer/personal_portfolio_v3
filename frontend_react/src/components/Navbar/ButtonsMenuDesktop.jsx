import React from "react";

const ButtonsMenuDesktop = ({ navbarButtons, resumeLink }) => {
  return (
    <ul className="app__navbar-links">
      {navbarButtons.map(item => (
        <li className="app__flex p-text" key={`link-${item}`}>
          {item === "resume" ? (
            <a href={resumeLink} target="_blank">
              {item}
            </a>
          ) : (
            <a href={`#${item}`}>{item}</a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ButtonsMenuDesktop;
