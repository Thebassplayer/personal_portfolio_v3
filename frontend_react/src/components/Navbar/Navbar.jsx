import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";

import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [resumeLink, setresumeLink] = useState("");

  useEffect(() => {
    const query = '*[_type == "resume"]';

    client.fetch(query).then(data => {
      setresumeLink(data[0].resumelink);
    });
  }, []);

  const navbarButtons = [
    "home",
    "about",
    "work",
    "skills",
    "testimonial",
    "contact",
  ];
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={images.logo} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {navbarButtons.map(item => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text">
          <div />
          <a href={resumeLink} target="_blank">
            resume
          </a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navbarButtons.map(item => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
