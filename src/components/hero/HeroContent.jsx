import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import Title from "../Title";
import Button from "../Button";

const HeroContent = () => {
  return (
    <>
      <div className="col-10 mx-auto mb-sm-4 col-sm-10 col-md-6">
        <div className="d-flex h-100 flex-column  align-items-start justify-content-center">
          <div className="d-flex align-items-center bg-white custom-border px-3 mb-2">
            <div className="text-warning fs-2">
              <HiBadgeCheck />
            </div>
            <div>#1 Editor choice App of {new Date().getFullYear()}</div>
          </div>
          <Title title="best app for your modern life style" />
          <p className="text-capitalize">
            increase productivity with a simple to-do App for managing your
            personal budgets
          </p>
          <div className="mt-2 mb-3">
            <Button text="try for free" />
            <button className="btn text-primary mx-2">watch demo video</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
