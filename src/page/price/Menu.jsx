import React from "react";
import styled from "styled-components";

const Menu = ({ items }) => {
  return (
    <MenuItems>
      <div className="container">
        <div className="row g-4">
          {items.map((item) => {
            const { id, title, subtitle, price, priceButton, descriptions } =
              item;
            return (
              <div
                key={id}
                className="col-10 mx-auto mx-md-0 col-sm-6 col-md-4"
              >
                <div className="card shadow text-center h-100">
                  <div className="card-header py-3 text-capitalize">
                    <h2 className="fw-bold">
                      ${price}
                      <span className="fs-6 text-muted">/month</span>
                    </h2>

                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted ">
                      {subtitle}
                    </h6>
                  </div>
                  <div className="card-body">
                    {descriptions.map((element) => {
                      return (
                        <>
                          <p className="card-text">{element.text1}</p>
                          <p className="card-text">{element.text2}</p>
                          <p className="card-text">{element.text3}</p>
                          <p className="card-text">{element.text4}</p>
                        </>
                      );
                    })}
                    {priceButton}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MenuItems>
  );
};

const MenuItems = styled.div`
  padding-top: 3rem;
`;

export default Menu;
