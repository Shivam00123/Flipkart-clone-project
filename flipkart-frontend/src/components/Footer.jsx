import React from "react";
import styled from "styled-components";
import MoreFitureLinks from "../assets/MoreFitureLinks";
import { data, Address } from "../assets/MoreFitureData";
import Copyright from "../assets/Copyright";

const Container = styled.div`
  width: 100vw;
  background-color: #172337;
  height: fit-content;
  position: relative;
  z-index: -1;
`;
const MoreFiture = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

const HelpDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 4rem;
`;
const LineDiv = styled.div`
  width: 1px;
  height: 40%;
  margin-top: 6rem;
  background-color: lightgray;
`;

const AddressDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 4rem;
`;

function Footer() {
  return (
    <Container>
      <MoreFiture>
        <HelpDiv>
          {data.map((tags, index) => (
            <MoreFitureLinks item={tags} key={index} />
          ))}
        </HelpDiv>
        <LineDiv />
        <AddressDiv>
          {Address.map((text, index) => (
            <MoreFitureLinks item={text} index={index} size="1.2rem" />
          ))}
        </AddressDiv>
      </MoreFiture>
      <Copyright />
    </Container>
  );
}

export default Footer;
