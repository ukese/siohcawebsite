import React from "react";
import "./meet.css";
import { Link } from "react-router-dom";
import team from "../../assets/img/team.jpg";

function Meet() {
  return (
    <div className="meet-the-team">
      <div className="team-photo">
        <img src={team} alt="team" />
      </div>
      <div className="about-team">
        <h1 className="meet-the-team-title"> Meet the team</h1>
        <p>
          We are a team of students from University of Maribor and University of
          Ljubljana under the mentorship of dr. Matej Strnad.
        </p>
        <div className="meet-the-team-button">
          <Link to="/team">
            <button>Find out more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Meet;
