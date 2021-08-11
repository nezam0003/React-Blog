import React from "react";
import styled from "styled-components";
import JackpotHeader from "./JackpotHeader";

const SmartJackPot = () => {
  return (
    <JackpotMainContent>
      <JackpotHeader />
    </JackpotMainContent>
  );
};

const JackpotMainContent = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 4rem 0rem;
  background: #fff;
`;

export default SmartJackPot;
