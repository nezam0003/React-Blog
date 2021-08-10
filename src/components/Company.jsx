import React from "react";
import img1 from "../images/company/Zash.jpg";
import img2 from "../images/company/abacus.jpg";
import img3 from "../images/company/anata.jpg";
import img4 from "../images/company/Bella.jpg";
import img5 from "../images/company/bok.jpg";
import img6 from "../images/company/chocolate.jpg";
import img7 from "../images/company/Cookie-intertemnet.jpg";
import img8 from "../images/company/corona-app.jpg";
import img9 from "../images/company/dBL.jpg";
import img10 from "../images/company/digital.jpg";
import img11 from "../images/company/employment.jpg";
import img12 from "../images/company/eversoft.jpg";

import styled from "styled-components";

const companies = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const Company = () => {
  return (
    <>
      <div className="pt-5 px-3">
        <div className="container">
          <p className="text-capitalize text-center text-dark py-3">
            trusted by companies like
          </p>
          <div className="row">
            {companies.map((image, index) => {
              return (
                <div
                  key={index}
                  className="col-6 mx-auto mx-md-0 col-sm-4 col-md-4 col-lg-2  mb-3"
                >
                  <CompanyImageContainer>
                    <img
                      src={image}
                      alt="img1"
                      className="img-fluid company-img border"
                    />
                  </CompanyImageContainer>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const CompanyImageContainer = styled.div`
  overflow: hidden;

  &:hover .company-img {
    transform: scale(1.3);
    cursor: pointer;
  }

  .company-img {
    transition: all 1s ease-in-out;
  }
`;

export default Company;
