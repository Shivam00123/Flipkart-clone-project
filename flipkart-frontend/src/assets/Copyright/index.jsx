import React from "react";
import styled from "styled-components";
import { data } from "../LastFooterLinks";
import Icontext from "../Icontext";
import Visa from "../Images/Visa.svg";

const Container = styled.div`
  width: 100%;
  border-top: 1px solid lightgray;
  padding: 2rem;
  margin-top: 0;
  display: flex;
  align-items: center;
`;

const LinkDiv = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
`;
const CopyRight = styled.div`
  flex: 1;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
`;
const CardsDiv = styled.div`
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
`;

const Images = styled.img``;

function index() {
  return (
    <Container>
      <LinkDiv>
        {data.map((item, index) => (
          <Icontext item={item} index={index} />
        ))}
      </LinkDiv>
      <CopyRight>&copy;2007-2021 Flipkart.com</CopyRight>
      <CardsDiv>
        <Images src={Visa} />
      </CardsDiv>
    </Container>
  );
}

export default index;
