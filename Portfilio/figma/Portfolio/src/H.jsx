import PropTypes from "prop-types";
import React from "react";
import "./h.css";

export const H = ({ className, text = "projects" }) => {
  return (
    <div className={`h ${className}`}>
      <div className="frame">
        <div className="text-wrapper">#</div>
        <div className="projects">{text}</div>
      </div>
      <img className="line-stroke" alt="Line stroke" />
    </div>
  );
};

H.propTypes = {
  text: PropTypes.string,
};