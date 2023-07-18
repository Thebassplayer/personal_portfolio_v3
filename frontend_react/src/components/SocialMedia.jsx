import React from "react";
// Components
import SocialButton from "./SocialButton/SocialButton";

import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMediaLinks = [
  {
    path: "https://twitter.com/roylopezdev",
    icon: <BsTwitter />,
    order: 3,
  },
  {
    path: "https://www.linkedin.com/in/roylopezdev/",
    icon: <BsLinkedin />,
    order: 2,
  },
  {
    path: "https://github.com/Thebassplayer",
    icon: <BsGithub />,
    order: 1,
  },
];

const Socialmedia = ({ className }) => {
  return (
    <div className={className}>
      {SocialMediaLinks.sort((a, b) => a.order - b.order).map(
        ({ path, icon, order }, index) => (
          <SocialButton
            path={path}
            icon={icon}
            order={order}
            key={`${order}-${index}`}
          />
        )
      )}
    </div>
  );
};

export default Socialmedia;
