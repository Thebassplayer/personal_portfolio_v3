import React from "react";

const SocialButton = ({
  path,
  target = "_blank",
  rel = "noreferrer",
  icon,
}) => {
  return (
    <a href={path} target={target} rel={rel}>
      <div>{icon}</div>
    </a>
  );
};

export default SocialButton;
