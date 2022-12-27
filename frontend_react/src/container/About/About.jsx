import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { images } from "../../constants";

import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description: "Looking for fast and responsive UI",
    imgUrl: images.about01,
  },
  {
    title: "Front End Development",
    description: "Looking for fast and responsive UI",
    imgUrl: images.about02,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Good Development</span>
        <br />
        means
        <br />
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt="about.title" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p2 className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
