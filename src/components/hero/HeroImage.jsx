import React from "react";
import styled from "styled-components";
import heroImg from "../../images/hero.svg";

const HeroImage = () => {
  return (
    <>
      <div className="col-10 mx-auto col-sm-10 col-md-6">
        <ImageContainer>
          <img src={heroImg} alt="hero" className="img-fluid custom-img" />
        </ImageContainer>
      </div>
    </>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 22rem;
  }
`;

export default HeroImage;
