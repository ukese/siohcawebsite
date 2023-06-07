import React from "react";
import "./team.css";
import "../../app.css";
import template from "./assets/template.jpeg";
import Fade from "react-reveal/Fade";
import { TeamMembers } from "./TeamMembers";

const Team = () => {
  return (
    <Fade bottom>
      <div className="team-box box">
        <h2 className="margin-bottom-1"> Meet the team! </h2>
        <h3 className="margin-bottom-1"> Mentor </h3>
        <div className="mentors-box">
          <div className="card">
            <img src={template} alt="Mentor"></img>
            <p className="name">dr. Matej Strnad</p>
          </div>
        </div>
        <h3 className="margin-bottom-1"> Students </h3>
        <div className="students-box">
          {TeamMembers.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.name}></img>
              <p className="name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Team;
