import React from "react";
import styled from "styled-components";
import featureImg from "../../images/feature.svg";

const FeaturesImage = () => {
  return (
    <>
      <div className="col-10 mx-auto  mb-4 mb-md-0  col-sm-10 col-md-6">
        <FeatureImageContainer>
          <img src={featureImg} alt="feature" className="img-fluid" />
        </FeatureImageContainer>
      </div>
    </>
  );
};

const FeatureImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  img {
    max-width: 22rem;
  }
`;

export default FeaturesImage;
