import React from "react";
import Title from "../../components/Title";
const FaqHeader = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-7">
            <Title title="frequently asked questions" />
            <p className="text-capitalize">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vel
              accusantium assumenda expedita in omnis dignissimos id incidunt at
              quidem?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqHeader;
