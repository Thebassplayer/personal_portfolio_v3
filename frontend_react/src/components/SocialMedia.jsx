import React from "react";

import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Socialmedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://twitter.com/roylopezdev"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsTwitter />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/roylopezdev/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href="https://github.com/Thebassplayer"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default Socialmedia;
