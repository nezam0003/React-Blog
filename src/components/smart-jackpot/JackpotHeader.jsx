import React from "react";
import Title from "../Title";

const JackpotHeader = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-sm-4 border-end border-2">
          <div
            style={{ maxWidth: "90%", textAlign: "center", padding: "1rem" }}
          >
            <Title title="smart jackpot that you may love this anytime & anywhere" />
          </div>
        </div>
        <div className="col-10 mx-auto mx-md-0 col-md-6">
          <div className="d-flex h-100 justify-content-start align-items-center">
            <p className="text-capitalize w-60">
              the rise of mobile devices transform the way we consume
              information entirly and the world most elevant channels such as
              facebook
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JackpotHeader;
