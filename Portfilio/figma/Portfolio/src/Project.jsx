import PropTypes from "prop-types";
import React from "react";
import "./project.css";

export const Project = ({
  className,
  text = "HTML",
  text1 = "SCSS",
  text2 = "Python",
  hasDiv = true,
  text3 = "ChertNodes",
  text4 = "Minecraft servers hosting",
  hasFrame = true,
}) => {
  return (
    <div className={`project ${className}`}>
      <img className="rectangle" alt="Rectangle" />
      <div className="frame-3">
        <div className="text-wrapper-3">{text}</div>
        <div className="text-wrapper-3">{text1}</div>
        <div className="text-wrapper-3">{text2}</div>
        {hasDiv && <div className="text-wrapper-3">Flask</div>}
      </div>
      <div className="frame-4">
        <div className="chert-nodes">{text3}</div>
        <div className="minecraft-servers">{text4}</div>
        <div className="frame-5">
          <div className="live-wrapper">
            <div className="live">Live &lt;~&gt;</div>
          </div>
          {hasFrame && (
            <div className="demo-wrapper">
              <div className="demo">Cached &gt;=</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  hasDiv: PropTypes.bool,
  text3: PropTypes.string,
  text4: PropTypes.string,
  hasFrame: PropTypes.bool,
};