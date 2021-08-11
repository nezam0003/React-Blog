import React from "react";
import heroImg from "../../images/hero.svg";

const HeroImage = () => {
  return (
    <>
      <div className="col-10 mx-auto  col-sm-10 col-md-6">
        <img src={heroImg} alt="hero" className="img-fluid custom-img" />
      </div>
    </>
  );
};

export default HeroImage;
