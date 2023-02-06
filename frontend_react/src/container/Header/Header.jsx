import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";

import { AppWrap } from "../../wrapper";

import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground.component";

import "./Header.scss";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const line = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const character = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const Header = () => {
  const text = ["DESIGN", "CODE", "DEPLOY", "AGAIN"];

  return (
    <div className="app__header app__flex">
      <AnimatedBackground />

      <motion.div
        style={{
          overflow: "hidden",
          display: "flex",
          fontSize: "2rem",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: 0,
          padding: 0,
        }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.map((word, i) => (
          <motion.div
            key={`${word}-${i}`}
            style={{
              overflow: "hidden",
              display: "flex",
              fontSize: "2rem",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              margin: 0,
              padding: 0,
            }}
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
    </div>
  );
};

export default AppWrap(Header, "home");
