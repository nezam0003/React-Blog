import React from "react";
import social from "../images/social.svg";
import styled from "styled-components";
import Title from "./Title";
import Button from "./Button";

const DesignIntegration = () => {
  return (
    <DesignSection>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto mx-md-0 mb-4 mb-md-0 col-md-6">
            <div className="img-container">
              <img src={social} alt="social" className="img-fluid" />
            </div>
          </div>
          <div className="col-10 mx-auto mx-md-0 mb-3 mb-md-0 col-md-6">
            <div className="design-content">
              <Title title="Design & build by letest code integration" />
              <p className="text-capitalize">
                the rise of mobile devices transform the way we consume
                information entirly and the world most elevant channels such as
                facebook
              </p>
              <Button text="learn more" />
            </div>
          </div>
        </div>
      </div>
    </DesignSection>
  );
};

const DesignSection = styled.section`
  padding: 4rem 0;

  .img-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 22rem;
    }
  }
  .design-content {
    margin-left: 2rem;
  }
  p {
    max-width: 60%;
  }
`;

export default DesignIntegration;
