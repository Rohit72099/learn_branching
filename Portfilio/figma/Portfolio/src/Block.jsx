import PropTypes from "prop-types";
import React from "react";
import "./block.css";

export const Block = ({
  className,
  text = "Languages",
  text1 = "TypeScript",
  text2 = "Lua",
  text3 = "Python",
  hasDiv = true,
}) => {
  return (
    <div className={`block ${className}`}>
      <div className="languages-wrapper">
        <div className="languages">{text}</div>
      </div>
      <img className="line" alt="Line" />
      <div className="div">
        <div className="frame-2">
          <div className="text-wrapper-2">{text1}</div>
          <div className="text-wrapper-2">{text2}</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-2">{text3}</div>
          {hasDiv && <div className="text-wrapper-2">JavaScript</div>}
        </div>
      </div>
    </div>
  );
};

Block.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  hasDiv: PropTypes.bool,
};