import React from "react";

import { AppWrap } from "../../wrapper";

import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground.component";
import Hero from "../../components/Hero/Hero.component";

import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <AnimatedBackground />
      <Hero />
    </div>
  );
};

export default AppWrap(Header, "home");
