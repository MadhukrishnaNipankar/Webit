import React from "react";
import "../"
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div id="heroSection" className="container d-flex">
      <div
        id="hero-text-container"
        className="container"
        style={{ marginRight: "4rem" }}
      >
        <h1>Got Stuck? Find the Right Solution for your coding Problem!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          exercitationem, unde repudiandae rerum enim doloribus id ullam? Quod,
          libero corporis.
        </p>

        <NavLink to="/login">
          <button type="button" className="btn btn-dark">
            Get Started Now!{" "}
          </button>
        </NavLink>
      </div>
      <img
        src="./Images/heroSectionImage.png"
        className="img-fluid"
        alt="..."
        width={480}
        height={480}
      ></img>
    </div>
  );
}

export default HeroSection;
