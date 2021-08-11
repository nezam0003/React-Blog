import React from "react";
import styled from "styled-components";
import featureImg from "../../images/feature.svg";

const FeaturesImage = () => {
  return (
    <>
      <div className="col-10 mx-auto  col-sm-10 col-md-6">
        <FeatureImageContainer>
          <img src={featureImg} alt="feature" className="img-fluid" />
        </FeatureImageContainer>
      </div>
    </>
  );
};

const FeatureImageContainer = styled.div`
  max-width: 22rem;
  text-align: center;
`;

export default FeaturesImage;
