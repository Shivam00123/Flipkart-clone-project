import React from "react";
import styled from "styled-components";
import Marginer from "../Marginer";

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Linktext = styled.span`
  font-size: 1.4rem;
  color: #fff;
  font-weight: 600;
  font-family: sans-serif;
  user-select: none;
`;

function index({ item }) {
  return (
    <Container>
      {item.icon}
      <Marginer direction="horizontal" margin="0.5rem" />
      <Linktext>{item.title}</Linktext>
    </Container>
  );
}

export default index;
