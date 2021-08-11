import React from "react";
import styled from "styled-components";
import Title from "./Title";

import { SiProtoDotIo } from "react-icons/si";
import { FcSupport, FcWorkflow } from "react-icons/fc";
import { MdDeveloperMode } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { BiCustomize } from "react-icons/bi";

const appElement = [
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
  {
    id: 5,
    header: "UX planning",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <FcWorkflow />,
  },
  {
    id: 6,
    header: "customer support",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <FcSupport />,
  },
];

const ChooseOurApp = () => {
  return (
    <ChooseAppSection>
      <div className="container">
        <div className="text-center mb-5">
          <Title title="why should you choose our app" />
        </div>
        <div className="row g-4">
          {appElement.map((element) => {
            return (
              <div
                key={element.id}
                className="col-10 mx-auto mx-sm-0 mb-2 mb-md-0  col-sm-6 col-md-4"
              >
                <div className="app-element">
                  <div className="app-img">{element.img}</div>
                  <div className="text-center">
                    <h4 className="text-capitalize">{element.header}</h4>
                    <p className="text-capitalize">{element.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ChooseAppSection>
  );
};

const ChooseAppSection = styled.section`
  background: #fff;
  padding: 4rem 0rem;

  .app-element {
    width: 100%;
    display: flex;
    flex-direction: column;

    .app-img {
      width: 4rem;
      margin: 0 auto;
      margin-bottom: 1rem;
      font-size: 3rem;
      background-color: #eeeaead0;
      border-radius: 50%;
      padding: 0.5rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      /* max-width: 65%; */
    }
  }
`;

export default ChooseOurApp;
