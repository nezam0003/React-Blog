import React from "react";
import styled from "styled-components";
import ChooseOurApp from "../../components/ChooseOurApp";
import DesignIntegration from "../../components/DesignIntegration";
import SmartJackPot from "../../components/smart-jackpot/SmartJackPot";
import UltimateFeature from "../../components/UltimateFeature";
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
        <ChooseOurApp />
        <UltimateFeature />
      </FeatureSection>
    </>
  );
};

const FeatureSection = styled.section`
  width: 100vw;
  height: 100%;
`;

export default Features;
