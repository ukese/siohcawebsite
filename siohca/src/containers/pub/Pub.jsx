import React from "react";
import "./pub.css";
import { Link } from "react-router-dom";
import { Publications } from "./Publications";
import { Press } from "./Press";
import { Awards } from "./Awards";
import Fade from "react-reveal/Fade";
import { getDaySuffix } from "../../utilities/DateUtils";

const formatDate = (date) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const [day, month, year] = date.split("-");
  const formattedDate = new Date(`${month}/${day}/${year}`).toLocaleDateString(
    "en-US",
    options
  );

  // Extract day, month, and year from the formatted date
  const formattedDay = formattedDate.split(" ")[1].replace(",", "");
  const formattedMonth = formattedDate.split(" ")[0];
  const formattedYear = formattedDate.split(" ")[2];

  // Add appropriate day suffix
  const daySuffix = getDaySuffix(formattedDay); // Use getDaySuffix from dateUtils.js

  return `${formattedMonth} ${formattedDay}${daySuffix}, ${formattedYear}`;
};

const Pub = () => {
  return (
    <div className="publications">
      <Fade>
        <div className="pub-box">
          <h2 className="margin-bottom-1">Publications</h2>
          <div className="pub-list">
            {Publications.map((item, index) => {
              return (
                <div key={index} className="pub-list-content margin-bottom-1">
                  <div className="pub-list-date">{formatDate(item.date)}</div>
                  <div className="pub-list-title">
                    <Link to={item.link}>
                      {" "}
                      <b>{item.name}</b>{" "}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="pub-box">
          <h2 className="margin-bottom-1">Press clippings</h2>
          <div className="pub-list">
            {Press.map((item, index) => {
              return (
                <div key={index} className="pub-list-content margin-bottom-1">
                  <div className="pub-list-date">{formatDate(item.date)}</div>
                  <div className="pub-list-title">
                    <Link to={item.link}>
                      {" "}
                      <b>{item.name}</b>{" "}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="pub-box">
          <h2 className="margin-bottom-1">Awards</h2>
          <div className="pub-list">
            {Awards.map((item, index) => {
              return (
                <div key={index} className="pub-list-content margin-bottom-1">
                  <div className="pub-list-date">{formatDate(item.date)}</div>
                  <div className="pub-list-title">
                    <Link to={item.link}>
                      {" "}
                      <b>{item.name}</b>{" "}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Pub;
