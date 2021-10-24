import React from "react";
import styled from "styled-components";
import { TopOffers } from "../Data";
import Offeritem from "../OffersItems";

const AllProducts = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
`;

export default function index() {
  return (
    <AllProducts>
      {TopOffers.map((item) => (
        <Offeritem item={item} text={item.Tag} />
      ))}
    </AllProducts>
  );
}
