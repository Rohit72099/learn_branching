import React from "react";
import "./media-wrapper.css";

export const MediaWrapper = ({ className }) => {
  return (
    <div className={`media-wrapper ${className}`}>
      <img className="line-stroke-2" alt="Line stroke" />
      <div className="frame-12">
        <img className="img-2" alt="Github" />
        <img className="img-2" alt="Dribble" />
        <img className="img-2" alt="Figma" />
      </div>
    </div>
  );
};