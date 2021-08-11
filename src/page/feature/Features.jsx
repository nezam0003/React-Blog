import React from "react";
import FeaturesContent from "./FeaturesContent";
import FeaturesImage from "./FeaturesImage";

const Features = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <FeaturesImage />
          <FeaturesContent />
        </div>
      </div>
    </>
  );
};

export default Features;
