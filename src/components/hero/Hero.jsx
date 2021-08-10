import React from "react";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </>
  );
};

export default Hero;
