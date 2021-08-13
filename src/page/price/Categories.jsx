import React from "react";
import styled from "styled-components";

const Categories = ({ categories, filterPriceList }) => {
  return (
    <Category>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <div className="btn-group " role="group" aria-label="Basic example">
              {categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className="btn btn-primary text-capitalize "
                    onClick={() => filterPriceList(category)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Category>
  );
};

const Category = styled.div`
  padding: 2rem 0rem;
`;

export default Categories;
