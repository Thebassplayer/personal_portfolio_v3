import React, { useState, useEffect } from "react";
// Components
import ButtonsMenuDesktop from "../ButtonsMenuDesktop/ButtonsMenuDesktop";
import ButtonsMenuMobile from "../ButtonsMenuMobile/ButtonsMenuMobile";
// Constants
import { urlFor, client } from "../../client";

import { images } from "../../constants";

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
    "resume",
  ];
  return (
    <nav className="app__navbar">
      {/**Logo */}
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={images.logo} alt="logo" />
        </a>
      </div>
      <ButtonsMenuDesktop
        navbarButtons={navbarButtons}
        resumeLink={resumeLink}
      />
      <ButtonsMenuMobile
        navbarButtons={navbarButtons}
        resumeLink={resumeLink}
        toggle={toggle}
        setToggle={setToggle}
      />
    </nav>
  );
};

export default Navbar;
