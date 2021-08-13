import React from "react";
import FaqHeader from "./FaqHeader";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";
const FrequentlyAskedQuestion = () => {
  return (
    <>
      <FaqHeader />
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-7">
            <div className="info">
              {questions.map((question) => {
                return <SingleQuestion key={question.id} {...question} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentlyAskedQuestion;
