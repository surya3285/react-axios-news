import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid bg-dark text-light flex-column hero-container d-flex justify-content-center align-items-center">
      <div className="display-1 text-success">
        NEWS <span className="fst-italic fw-bold">X</span>
      </div>
      <h5>THE WEBSITE BUILT WITH THE NEWS API.</h5>
    </div>
  );
};

export default Hero;
