import PropTypes from "prop-types";
import React from "react";
import "./footer.css";

export const Footer = ({ className, logoClassName, href }) => {
  return (
    <div className={`footer ${className}`}>
      <img className="img" alt="Line" />
      <div className="frame-6">
        <div className="frame-7">
          <div className="frame-8">
            <div className="frame-9">
              <div className="frame-10">
                <div className={`logo ${logoClassName}`} />
                <div className="text-wrapper-4">Elias</div>
              </div>
              <a className="text-wrapper-5" href={href} rel="noopener noreferrer" target="_blank">
                elias@elias-dev.ml
              </a>
            </div>
            <p className="p">Web designer and front-end developer</p>
          </div>
          <div className="frame-11">
            <div className="text-wrapper-6">Media</div>
            <div className="group">
              <img className="github" alt="Github" />
              <img className="figma" alt="Figma" />
              <img className="discord-2" alt="Discord" />
            </div>
          </div>
        </div>
        <p className="text-wrapper-7">© Copyright 2022. Made by Elias</p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  href: PropTypes.string,
};