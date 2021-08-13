import React from "react";
import styled from "styled-components";

import planning from "../images/plan.svg";

import { MdDeveloperMode } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { BiCustomize } from "react-icons/bi";
import Title from "./Title";
import Button from "./Button";

const ultimateElement = [
  {
    id: 1,
    header: "app development",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <MdDeveloperMode />,
  },
  {
    id: 2,
    header: "10 times awards",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <FaAward />,
  },
  {
    id: 3,
    header: "cloud storage",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <GrStorage />,
  },
  {
    id: 4,
    header: "customization",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <BiCustomize />,
  },
];

const UltimateFeature = () => {
  return (
    <UltimateFeatureSection>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-sm-4 col-sm-10 col-md-6">
            <div className="ultimate-content">
              <div className="ultimate-header">
                <Title title="ultimate features that we built" />
                <p>
                  get your blood test delivared at home collect a sample from
                  the news your blood test
                </p>
              </div>
              <div className="row">
                {ultimateElement.map((element) => {
                  return (
                    <div
                      key={element.id}
                      className="col-10 mx-auto mx-md-0 mb-3 mb-md-0 col-sm-6 col-md-6"
                    >
                      <div className="ultimate-element">
                        <div>
                          <div className="ultimate-img">{element.img}</div>
                          <h4 className="text-capitalize">{element.header}</h4>
                          <p className="text-capitalize">
                            {element.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button text="see more" />
            </div>
          </div>
          <div className="col-10 mx-auto my-sm-4 col-sm-10 col-md-6">
            <div className="img-container">
              <img src={planning} alt="plan" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </UltimateFeatureSection>
  );
};

const UltimateFeatureSection = styled.section`
  padding: 4rem 0rem;

  .ultimate-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .ultimate-header {
      width: 100%;
      margin: 0 0 2rem 0;
      p {
        text-transform: capitalize;
      }
    }

    .ultimate-element {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      .ultimate-img {
        width: 4rem;
        margin-bottom: 1rem;
        font-size: 3rem;
        background-color: #eeeaead0;
        border-radius: 50%;
        padding: 0.5rem;
        text-align: center;
        display: flex;
        justify-content: center;
      }

      p {
        max-width: 90%;
      }
    }
  }

  .img-container {
    width: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 22rem;
    }
  }
`;

export default UltimateFeature;
