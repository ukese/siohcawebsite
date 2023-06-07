import React from "react";
import "./home.css";
import About from "../../components/about/About";
import {
  Ohca,
  Utstein,
  Funding,
  TrustedBy,
  Acknowledgements,
  Recent,
  Meet,
  Product,
} from "../../components";

const Homepage = () => {
  return (
    <div>
      <div className="home-background">
        <About />
      </div>
      <div className="home-background-two-circles">
        <div className="home-background-ohca">
          <Ohca />
        </div>
        <div className="home-background-recent">
          <Recent />
        </div>
      </div>
      <div className="home-background-meet">
        <Meet />
      </div>
      <div className="home-background-trustedby">
        <TrustedBy />
      </div>

      <div className="home-background-utstein">
        <Utstein />
      </div>
      <div className="home-background-product">
        <Product />
      </div>
      <div className="home-background-funding">
        <Funding />
      </div>

      <div className="home-background-ack">
        <Acknowledgements />
      </div>
    </div>
  );
};

export default Homepage;
