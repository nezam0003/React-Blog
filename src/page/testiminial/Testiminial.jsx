import React from "react";
import styled from "styled-components";
import Review from "./Review";
import TestiminialHeader from "./TestiminialHeader";

const Testiminial = () => {
  return (
    <>
      <MainContent>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto mx.md-0 col-md-5">
              <TestiminialHeader />
            </div>
            <div className="col-10 mx-auto  col-md-5">
              <Review />
            </div>
          </div>
        </div>
      </MainContent>
    </>
  );
};

const MainContent = styled.main`
  /* min-height: 100vh; */
`;

export default Testiminial;
