import React from "react";
import FeaturesHeader from "./FeaturesHeader";
import { GiClockwork } from "react-icons/gi";
import { SiProtoDotIo } from "react-icons/si";
import { FcProcess } from "react-icons/fc";
import styled from "styled-components";

const featureElement = [
  {
    id: 1,
    header: "fast performance",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <GiClockwork />,
  },
  {
    id: 2,
    header: "prototyping",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <FcProcess />,
  },
  {
    id: 3,
    header: "vector editing",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <SiProtoDotIo />,
  },
];

const FeaturesContent = () => {
  return (
    <>
      <div className="col-10 mx-auto my-sm-4 col-sm-10 col-md-6">
        <FeaturesHeader />
        <div className="d-flex flex-column ">
          {featureElement.map((element) => {
            return (
              <FeatureContent key={element.id}>
                <div className="feature-img">{element.img}</div>
                <div className="feature-text">
                  <h4 className="text-dark text-capitalize">
                    {element.header}
                  </h4>
                  <p>{element.description}</p>
                </div>
              </FeatureContent>
            );
          })}
        </div>
      </div>
    </>
  );
};

const FeatureContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .feature-img {
    margin-right: 2rem;
    font-size: 3rem;
    background-color: #fff;
    border-radius: 50%;
    padding: 0.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .feature-text {
    p {
      max-width: 50%;
    }
  }
`;

export default FeaturesContent;
