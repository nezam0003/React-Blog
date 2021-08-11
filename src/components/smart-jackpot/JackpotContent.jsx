import React from "react";
import styled from "styled-components";

import { GiClockwork } from "react-icons/gi";
import { SiProtoDotIo } from "react-icons/si";
import { FcProcess } from "react-icons/fc";

const jackpotElement = [
  {
    id: 1,
    header: "autometic payout",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <GiClockwork />,
  },
  {
    id: 2,
    header: "network effect",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <FcProcess />,
  },
  {
    id: 3,
    header: "bigger rewards method",
    description:
      "get your blood test delivared at home collect a sample from the news your blood test",
    img: <SiProtoDotIo />,
  },
];

const JackpotContent = () => {
  return (
    <Content>
      <div className="container">
        <div className="row">
          {jackpotElement.map((element) => {
            return (
              <div
                key={element.id}
                className="col-10 mx-auto mx-sm-0 mb-2 mb-md-0  col-sm-6 col-md-4"
              >
                <div className="jackpot-element">
                  <div>
                    <div className="jackpot-img">{element.img}</div>
                    <h4 className="text-capitalize">{element.header}</h4>
                    <p className="text-capitalize">{element.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Content>
  );
};

const Content = styled.div`
  padding: 4rem 0;

  .jackpot-element {
    display: flex;
    flex-direction: column;

    .jackpot-img {
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
      max-width: 65%;
    }
  }
`;

export default JackpotContent;
