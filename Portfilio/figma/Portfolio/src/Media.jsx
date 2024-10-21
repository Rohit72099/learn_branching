import PropTypes from "prop-types";
import React from "react";
import "./media.css";

export const Media = ({ state, className, discord = "discord.svg", text = "!Elias#3519" }) => {
  return (
    <div className={`media ${className}`}>
      <img className="discord" alt="Discord" src={discord} />
      <div className="elias">{text}</div>
    </div>
  );
};

Media.propTypes = {
  state: PropTypes.oneOf(["default"]),
  discord: PropTypes.string,
  text: PropTypes.string,
};