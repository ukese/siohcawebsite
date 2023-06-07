import React from "react";
import "./ohca.css";
import Fade from "react-reveal/Fade";

const Ohca = () => {
  return (
    <div className="ohca-box">
      <div className="ohca-box-title">
        <Fade delay={100}>
          <div className="t1"> What is</div>
        </Fade>
        <Fade delay={200}>
          <div className="t3"> OHCA</div>
        </Fade>
      </div>
      <div className="ohca-box-text">
        <Fade bottom delay={200}>
          <div className="box" id="text1">
            <p>
              <b>Out-of-hospital cardiac arrest</b> (OHCA) describes the loss of{" "}
              <b>mechanical cardiac function</b> and the{" "}
              <b>absence of systemic circulation</b>.{" "}
            </p>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <div className="box" id="text2">
            <p>
              <b>Time is crucial</b>, with a lack of perfusion leading to
              continual cell death; with each second that passes the possibility
              of a good outcome decreases.
            </p>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <div className="box" id="text3">
            <p>
              Despite a long history of trying to improve how we manage OHCA,{" "}
              <b>survival remains dismally low </b>.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Ohca;
