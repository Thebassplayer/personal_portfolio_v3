import React from "react";
// Components
import Socialmedia from "../SocialMedia";
// Icons
import { HiMenuAlt4, HiX } from "react-icons/hi";
// Frame Motion
import { motion } from "framer-motion";
// Styles
import "./ButtonsMenuMobile.scss";

const ButtonsMenuMobile = ({
  navbarButtons,
  resumeLink,
  toggle,
  setToggle,
}) => {
  return (
    <div className="app__navbar-menu">
      <HiMenuAlt4 onClick={() => setToggle(true)} />
      {toggle && (
        <motion.div
          whileInView={{ x: [300, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <HiX onClick={() => setToggle(false)} />

          <ul>
            {navbarButtons.map(item => (
              <li key={item}>
                {item === "resume" ? (
                  <a href={resumeLink} target="_blank">
                    {item}
                  </a>
                ) : (
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <Socialmedia />
        </motion.div>
      )}
    </div>
  );
};

export default ButtonsMenuMobile;
