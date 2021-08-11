import React from "react";
import SmartJackPot from "../../components/smart-jackpot/SmartJackPot";
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
      <SmartJackPot />
    </>
  );
};

export default Features;
