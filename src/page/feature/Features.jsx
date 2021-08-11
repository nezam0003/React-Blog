import React from "react";
import styled from "styled-components";
import DesignIntegration from "../../components/DesignIntegration";
import SmartJackPot from "../../components/smart-jackpot/SmartJackPot";
import FeaturesContent from "./FeaturesContent";
import FeaturesImage from "./FeaturesImage";

const Features = () => {
  return (
    <>
      <FeatureSection>
        <div className="container">
          <div className="row">
            <FeaturesImage />
            <FeaturesContent />
          </div>
        </div>
        <SmartJackPot />
        <DesignIntegration />
      </FeatureSection>
    </>
  );
};

const FeatureSection = styled.section`
  width: 100vw;
  height: 100%;
`;

export default Features;
