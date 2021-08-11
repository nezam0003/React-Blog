import React from "react";
import styled from "styled-components";
import JackpotContent from "./JackpotContent";
import JackpotHeader from "./JackpotHeader";

const SmartJackPot = () => {
  return (
    <JackpotMainContent>
      <JackpotHeader />
      <JackpotContent />
    </JackpotMainContent>
  );
};

const JackpotMainContent = styled.div`
  padding: 4rem 0rem 0rem 0rem;
  background: #fff;
`;

export default SmartJackPot;
