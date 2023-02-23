import React from "react";

import { HERO_FRAMER_CONFIG } from "./Hero.framer";

import { motion } from "framer-motion";

import "./Hero.styles.scss";

function Hero() {
  const text = ["DESIGN", "CODE", "DEPLOY", "AGAIN"];

  const { container, line, character } = HERO_FRAMER_CONFIG;

  return (
    <>
      <motion.div
        className="hero_container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.map((word, i) => (
          <motion.div
            key={`${word}-${i}`}
            className="hero_line"
            variants={line}
            initial="hidden"
            animate="visible"
          >
            {word.split("").map((char, index) => {
              return (
                <motion.span
                  key={`${char}-${index}`}
                  variants={character}
                  className="app__header-main--text"
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Hero;
