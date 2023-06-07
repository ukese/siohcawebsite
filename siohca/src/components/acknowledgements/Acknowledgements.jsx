import React from "react";
import { Link } from "react-router-dom";
import "./acknowledgements.css";
import Fade from "react-reveal/Fade";
import { AcknowledgementsItems } from "./AcknowledgementsItems";

const Acknowledgements = () => {
  return (
    <div className="acknowledgements">
      <div className="acknowledgements-title">
        <h2>We would like to thank</h2>
      </div>
      <div className="acknowledgements-content">
        {AcknowledgementsItems.map((item, index) => {
          return (
            <div className="acknowledgements-content-box margin-bottom-1">
              <Link to={item.link}>
                <p>
                  <h3 className="margin-bottom-1">{item.name}</h3>
                  {item.text}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Acknowledgements;
