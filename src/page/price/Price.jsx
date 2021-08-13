import React, { useState } from "react";
import styled from "styled-components";
import Categories from "./Categories";
import { priceLists } from "./data";
import Menu from "./Menu";
import PriceHeader from "./PriceHeader";

const allCategories = [
  "all",
  ...new Set(priceLists.map((price) => price.category)),
];

const Price = () => {
  const [menuItems, setMenuItems] = useState(priceLists);

  // Filter price list by category
  const filterPriceList = (category) => {
    if (category === "all") {
      setMenuItems(priceLists);
      return;
    }
    const newPriceList = priceLists.filter(
      (list) => list.category === category
    );
    setMenuItems(newPriceList);
  };

  return (
    <PriceSection>
      <PriceHeader />
      <Categories
        categories={allCategories}
        filterPriceList={filterPriceList}
      />
      <Menu items={menuItems} />
    </PriceSection>
  );
};

const PriceSection = styled.section`
  padding: 2rem 0;
`;

export default Price;
