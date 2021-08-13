import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <QuestionContainer>
      <header>
        <h4>{title}</h4>
        <button
          type="button"
          className="toggleButton"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </QuestionContainer>
  );
};

const QuestionContainer = styled.article`
  background: #fff;
  padding: 1rem 1.5rem;
  border: 2px solid var(--clr-grey-special);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-weight: 700;
      margin-bottom: 0;
      line-height: 1.5;
    }
    .toggleButton {
      background: transparent;
      border-color: transparent;
      width: 2rem;
      height: 2rem;
      background: var(--clr-grey-special);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: var(--clr-red-special);
      cursor: pointer;
      margin-left: 1rem;
      align-self: center;
      min-width: 2rem;
    }
  }

  p {
    color: var(--clr-grey-3);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
`;

export default SingleQuestion;
